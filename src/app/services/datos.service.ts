import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente.model";


@Injectable()
export class DatosService {
    private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
    private cabecera: any = {};





    constructor(private http: HttpClient) {
        let token = '8c260a1762e14b095327ce5de2692cca6d2dd3dc758bbfff32f9d4a65fd9992ca61a61e148b7a90af7ba1a6c0adcb4bc';

        this.cabecera = { 'X-Auth': token }
    }
    
    clientes:Cliente[]=[];
    filtros = {
        alias: '',
        activo: '',
        provincia: '',
        documento: '',
        codigo: ''
    }

    getCliente(parametros: any): Observable<any> {
        
        return this.http.get<any>('https://www.azurglobal.es/apiPracticas/clientes/', { headers: this.cabecera, params: parametros });
    }

    
    // buscar() {
        
    
    //     this.getCliente(this.filtros).subscribe(
    //       (data)=>{console.log(data);this.clientes=data.data},
    //       (error)=>{alert("Los datos no han podido cargarse");}
    //     )
    
        
        
    //   }




}