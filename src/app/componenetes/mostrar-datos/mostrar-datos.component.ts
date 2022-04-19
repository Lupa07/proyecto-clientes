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
  datoSeleccionado:any=[];
startItem=0;
endItem=15;
  currentPage:number=1;
  numero_elementos:number=0;
   constructor(public miServ:DatosService) {

     miServ.getCliente({}).subscribe(
       (data)=>{
         console.log(data);
        this.miServ.clientes=data.data;
        this.ordenarPorId()
      },
       (error)=>{alert("Los datos no han podido cargarse");}

     )
     
    }
    
  totalItems:number=0;
    ordenarPorId(){
      this.miServ.clientes.sort(function(a:Cliente, b:Cliente) {
        if (a.alias > b.alias) {
          return 1;
        }
        if (a.alias < b.alias) {
          return -1;
        }
        return 0;
      });
    }
    mostrarSeleccionado(index:any){
      this.datoSeleccionado=this.miServ.clientes[index]
     // console.log(this.datoSeleccionado);
    }


  ngOnInit(): void {
    this.totalItems=this.miServ.clientes.length
this.recalcularFilas();
    }
    @HostListener('window:resize', ['$event'])
    onResize(event:any) {
      this.recalcularFilas();
  }
  recalcularFilas(){
    let alto_cuerpo=0;
    let cuerpo=document.getElementById('cuerpo_tabla');
    if(cuerpo!==null){
      alto_cuerpo=cuerpo.offsetHeight;
    }
    let numero_pag=Math.floor(alto_cuerpo/30);
    this.cambiar_pagina(1,numero_pag);
  }
  cambiar_pagina(pag:number, items:number){

    this.numero_elementos=items;
    setTimeout(()=>this.currentPage=pag,100)
  }

    
  }
