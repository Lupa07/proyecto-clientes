import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss']
})
export class MostrarDatosComponent implements OnInit {
  datos: any[] = []

  
   constructor(private miServ:DatosService) {
     miServ.getCliente({}).subscribe(
       (data)=>{console.log(data);this.datos=data.data;},
       (error)=>{alert("Los datos no han podido cargarse");}
     )
    }

  ngOnInit(): void {
    }

    
  }
