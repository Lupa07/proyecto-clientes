import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  constructor(public miServ: DatosService) { }

  ngOnInit(): void {
  }


  numCliente: string = '';
  alias: string = '';
  provincia: string = '';
  documento: string = '';
  activoB: boolean = true



  buscar() {
    
    let filtro = {
      codigo: this.numCliente,
      alias: this.alias,
      provincia: this.provincia,
      documento: this.documento,
      activo: this.activoB ? 1:0

    }

    this.miServ.getCliente(filtro).subscribe(
      (data) => { console.log(data); this.miServ.clientes = data.data;this.orden(); },
      (error) => { alert("Los datos no han podido cargarse"); }
    )
    
  }

  orden(){
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
  ordenarPorId(){
    this.miServ.clientes.sort(function(a,b){
      return a.idcliente + b.idcliente
    })
  }
}
