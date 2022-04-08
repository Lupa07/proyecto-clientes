import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente.model";

@Injectable()
export class DatosService {
    private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
    private cabecera: any = {};





    constructor(private http: HttpClient) {
        let token = 'CA87F594A5169DC4CCAFB8DA22F4CDADC2CBD94BE24500EC01726599793CA28951D8EF996E5834CB00A756B00A5C5BAC';

        this.cabecera = { 'X-Auth': token }
    }

    getCliente(parametros: any): Observable<any> {
        const filtros = {
            alias: '',
            activo: 1,
            provincia: '',
            documento: '',
            codigo: '123.10'
        }
        return this.http.get<any>('https://www.azurglobal.es/apiPracticas/clientes/', { headers: this.cabecera, params: filtros });
    }




}