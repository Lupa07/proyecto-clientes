import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente.model";
import * as CryptoJS from 'crypto-js';


@Injectable()
export class DatosService {
    private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
    private cabecera: any = {};
    private nombre: string = 'JOAQUIN';
    private fecha: Date = new Date(Date.now());




    constructor(private http: HttpClient) {

        let dia = this.fecha.getDate() < 9 ? '0' + this.fecha.getDate() : this.fecha.getDate();
        let mes = this.fecha.getMonth() < 9 ? '0' + (this.fecha.getMonth() + 1) : this.fecha.getMonth() + 1;
        let year = this.fecha.getFullYear();
        let cadenalista = this.nombre + year + mes + dia;
        let token = CryptoJS.SHA384(cadenalista).toString();

        this.cabecera = { 'X-Auth': token }
    }

    clientes: Cliente[] = [];
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



    deleteCliente(parametros: any): Observable<any> {

        return this.http.delete<any>('https://www.azurglobal.es/apiPracticas/clientes/', { headers: this.cabecera, params: parametros });
    }


    modificarCliente(parametros: any): Observable<any> {

        return this.http.put<any>('https://www.azurglobal.es/apiPracticas/clientes/', { headers: this.cabecera, params: parametros });
    }

    crearUsuario(nuevoUsuario:any): Observable<any> {

        return this.http.post<any>(this.url, nuevoUsuario, { headers: this.cabecera })
    }




}