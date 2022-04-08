import { DatosService } from "../services/datos.service";

export class Cliente{
    public idcliente:string;
    public activo:string;
    public numero:string;
    public nombre:string;
    public alias:string;
    public razon_social:string;
    public direccion:string;
    public poblacion:string;
    public provincia:string;
    public telefono:string;
    public comercial:string;
    public documento:string;
    public email:string;
    public notas:string;
    public cp:string;
    public localidad:string;


    constructor(json:any){
        this.idcliente=json.idcliente??'';
        this.activo=json.activo??'';
        this.numero=json.numero??'';
        this.nombre=json.nombre??'';
        this.alias=json.alias??'';
        this.razon_social=json.razon_social??'';
        this.direccion=json.direccion??'';
        this.poblacion=json.poblacion??'';
        this.provincia=json.provincia??'';
        this.telefono=json.telefono??'';
        this.comercial=json.comercial??'';
        this.documento=json.documento??'';
        this.email=json.email??'';
        this.notas=json.notas??'';
        this.cp=json.cp??'';
        this.localidad=json.localidad??'';
    }
    
}