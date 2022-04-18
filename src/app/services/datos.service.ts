import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class DatosService {
    private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
    private cabecera: any = {};





    constructor(private http: HttpClient) {
        let token = '65287275e193138e2630933e8ff28b7938e45d4f73919f97d79676273f163db40b3a1d59e6b8089642de5e62dfb338ba';

        this.cabecera = { 'X-Auth': token }
    }
    public filtrado = {
        'numCliente': '',
        'alias': '',
        'provincia': '',
        'documento': '',
        'activo:boolean': false
    }
    

    getCliente(parametros: any): Observable<any> {
        const filtros = {
            alias: '',
            //activo: 1,
            provincia: '',
            documento: '',
            codigo: ''
        }
        return this.http.get<any>('https://www.azurglobal.es/apiPracticas/clientes/', { headers: this.cabecera, params: filtros });
    }




}