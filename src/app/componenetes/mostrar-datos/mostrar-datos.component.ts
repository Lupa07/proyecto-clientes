import { ThisReceiver } from '@angular/compiler';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, HostListener, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss']
})
export class MostrarDatosComponent implements OnInit {
  datos: any[] = []
  datoSeleccionado: any = [];
  startItem = 0;
  endItem = 15;
  currentPage: number = 1;
  numero_elementos: number = 0;

  numCliente: string = this.datoSeleccionado.numero;
  alias: string = this.datoSeleccionado.alias;
  nombre: string = this.datoSeleccionado.nombre;
  email: string = this.datoSeleccionado.email;
  direccion: string = this.datoSeleccionado.direccion;
  documento: string = this.datoSeleccionado.documento;
  razonSocial: string = this.datoSeleccionado.razon_social;
  provincia: string = this.datoSeleccionado.provincia;
  cp: string = this.datoSeleccionado.codigo_postal;
  localidad: string = this.datoSeleccionado.localidad;
  telefono: number = this.datoSeleccionado.telefono;
  comercial: string = this.datoSeleccionado.comercial;
  notas: string = this.datoSeleccionado.notas;
  activob: boolean = true;

  status: string = '';


  constructor(public miServ: DatosService) {

    miServ.getCliente({}).subscribe(
      (data) => {
        console.log(data);
        this.miServ.clientes = data.data;
        this.ordenarPorId();

        this.datoSeleccionado = miServ.clientes[0]
      },
      (error) => { alert("Los datos no han podido cargarse"); }

    )

  }
  eliminar() {
    let usuarioAborrar = {
      id: this.datoSeleccionado.idcliente
    }
    console.log(this.datoSeleccionado.idcliente)
    this.miServ.deleteCliente(usuarioAborrar).subscribe(
      (data) => { this.recargarDatos() },
      (error) => {
        alert(error.mensaje);
      }
    )


  }
  modificar() {
    
    
    let datosInput = {
      idcliente: this.datoSeleccionado.idcliente,

      alias: this.alias,
      nombre: this.nombre,
      email: this.email,
      direccion: this.direccion,
      documento: this.documento,
      razon_social: this.razonSocial,
      provincia: this.provincia,
      codigo_postal: this.cp,
      localidad: this.localidad,
      telefono: this.telefono,
      comercial: this.comercial,
      notas: this.notas,
      activo: this.activob
    }
    console.log('cliente modificado')
   console.log('datos de datosInput',datosInput)
    this.miServ.modificarCliente(datosInput).subscribe(
      (data) => {this.reiniciarValores(), this.recargarDatos()  },
      (error) => { alert("no ha funcionado") }
    )
    
  }

  reiniciarValores(){
    this.numCliente = this.datoSeleccionado.numero;
    this.alias = this.datoSeleccionado.alias;
    this.nombre = this.datoSeleccionado.nombre;
    this.email = this.datoSeleccionado.email;
    this.direccion = this.datoSeleccionado.direccion;
    this.documento = this.datoSeleccionado.documento;
    this.razonSocial = this.datoSeleccionado.razon_social;
    this.provincia = this.datoSeleccionado.provincia;
    this.cp = this.datoSeleccionado.codigo_postal;
    this.localidad = this.datoSeleccionado.localidad;
    this.telefono = this.datoSeleccionado.telefono;
    this.comercial = this.datoSeleccionado.comercial;
    this.notas = this.datoSeleccionado.notas;
    this.activob = true;
  }
  crear() {
    let datosInput = {

      numero: this.numCliente,
      alias: this.alias,
      nombre: this.nombre,
      email: this.email,
      direccion: this.direccion,
      documento: this.documento,
      razon_social: this.razonSocial,
      provincia: this.provincia,
      codigo_postal: this.cp,
      localidad: this.localidad,
      telefono: this.telefono,
      comercial: this.comercial,
      notas: this.notas,
      activo: this.activob ? 1 : 0
    }

    this.miServ.crearUsuario(datosInput).subscribe(
      (data) => { this.recargarDatos() },
      (error) => { alert(error.mensaje) }
    )


  }

  recargarDatos() {
    let filtros = {
      alias: '',
      activo: '',
      provincia: '',
      documento: '',
      codigo: ''
    }
    this.miServ.getCliente(filtros).subscribe(
      (data) => {
        console.log(data);

        this.miServ.clientes = data.data;

        this.ordenarPorId();
        this.datoSeleccionado = this.miServ.clientes[0]
      },
      (error) => { alert("Los datos no han podido cargarse"); }

    )
  }

  totalItems: number = 0;
  ordenarPorId() {
    this.miServ.clientes.sort(function (a: Cliente, b: Cliente) {
      if (a.alias > b.alias) {
        return 1;
      }
      if (a.alias < b.alias) {
        return -1;
      }
      return 0;
    });
  }
  mostrarSeleccionado(item: Cliente) {

    this.datoSeleccionado = item;
    this.reiniciarValores();
    console.log("cliente seleccionado",this.datoSeleccionado);

  }


  ngOnInit(): void {

    this.totalItems = this.miServ.clientes.length
    this.recalcularFilas();

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.recalcularFilas();
  }
  recalcularFilas() {
    let alto_cuerpo = 0;
    let cuerpo = document.getElementById('cuerpo_tabla');
    if (cuerpo !== null) {
      alto_cuerpo = cuerpo.offsetHeight;
    }
    let numero_pag = Math.floor(alto_cuerpo / 30);
    this.cambiar_pagina(1, numero_pag);
  }
  cambiar_pagina(pag: number, items: number) {

    this.numero_elementos = items;
    setTimeout(() => this.currentPage = pag, 100)
  }
  limpiar() {
    this.datoSeleccionado = {}
  }

  bandera() {

    if (this.activob == true) {

    }
  }






}


