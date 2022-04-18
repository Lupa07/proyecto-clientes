import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss']
})
export class MostrarDatosComponent implements OnInit {
  datos: any[] = []
  datoSeleccionado:any=[];

  
   constructor(private miServ:DatosService) {
     miServ.getCliente({}).subscribe(
       (data)=>{console.log(data);this.datos=data.data;this.ordenarPorId()},
       (error)=>{alert("Los datos no han podido cargarse");}

     )
    }
  
    ordenarPorId(){
      this.datos.sort(function(a,b){
        return a.idcliente - b.idcliente
      })
    }
    mostrarSeleccionado(index:any){
      this.datoSeleccionado=this.datos[index]
      console.log(this.datoSeleccionado);
    }


  ngOnInit(): void {
    
    }

    
  }
