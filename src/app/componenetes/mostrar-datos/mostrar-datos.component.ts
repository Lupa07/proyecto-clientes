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

  numCliente: string = '';
  alias: string = '';
  nombre: string = ''
  email: string = '';
  direccion: string = ''
  documento: string = '';
  razonSocial: string = '';
  provincia: string = '';
  cp: string = '';
  localidad: string = '';
  telefono: number = 0;
  comercial: string = '';
  notas: string = '';
  activob: boolean = true;

  status: string = '';


  constructor(public miServ: DatosService) {

    miServ.getCliente({}).subscribe(
      (data) => {
        console.log(data);
        this.miServ.clientes = data.data;
        this.ordenarPorId();
        
        this.datoSeleccionado = Object.assign(Cliente,miServ.clientes[0])
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
      console.log("datos seleccionado",this.datoSeleccionado.alias)
      console.log("datosInput: ", datosInput.alias)
    this.miServ.modificarCliente(datosInput).subscribe(
      (data) => { this.recargarDatos() },
      (error) => { alert(error.mensaje),alert("no ha funcionado") }
    )
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
    console.log(this.cp, "codigo postal del input")
    console.log(datosInput.codigo_postal, "codigo postal de datosInput")

    this.miServ.crearUsuario(datosInput).subscribe(
      (data) => {console.log(datosInput), this.recargarDatos() },
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
    this.datoSeleccionado = item
    console.log(this.datoSeleccionado);

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


