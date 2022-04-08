import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss']
})
export class MostrarDatosComponent implements OnInit {


  
    // constructor(public miServ:DatosService) { }

  ngOnInit(): void {
    }

    datos: any[] = [
          {
              idcliente: "74",
              activo: "1",
              numero: "74.10",
              nombre: "REPUESTOS VEGA",
              alias: "VEGA",
              razon_social: "REPUESTOS VEGA",
              direccion: "C/ CRUZ DE LA CAVA, 22",
              poblacion: "41600 Arahal",
              provincia: "Sevilla",
              telefono: "955840150",
              comercial: "ENRIQUE",
              documento: "28652773V",
              email: "recambiosvega@gmail.com",
              notas: "Propietario : Rafael\nHijos : Rafael y Francisco",
              cp: "41600",
              localidad: "Arahal"
          },
          {
            idcliente: "74",
            activo: "1",
            numero: "74.10",
            nombre: "REPUESTOS VEGA",
            alias: "VEGA",
            razon_social: "REPUESTOS VEGA",
            direccion: "C/ CRUZ DE LA CAVA, 22",
            poblacion: "41600 Arahal",
            provincia: "Sevilla",
            telefono: "955840150",
            comercial: "ENRIQUE",
            documento: "28652773V",
            email: "recambiosvega@gmail.com",
            notas: "Propietario : Rafael\nHijos : Rafael y Francisco",
            cp: "41600",
            localidad: "Arahal"
        },
        {
          idcliente: "74",
          activo: "1",
          numero: "74.10",
          nombre: "REPUESTOS VEGA",
          alias: "VEGA",
          razon_social: "REPUESTOS VEGA",
          direccion: "C/ CRUZ DE LA CAVA, 22",
          poblacion: "41600 Arahal",
          provincia: "Sevilla",
          telefono: "955840150",
          comercial: "ENRIQUE",
          documento: "28652773V",
          email: "recambiosvega@gmail.com",
          notas: "Propietario : Rafael\nHijos : Rafael y Francisco",
          cp: "41600",
          localidad: "Arahal"
      }
        ]
  }
