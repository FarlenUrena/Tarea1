import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TramitesTipos } from './tramites-tipos';

@Injectable({
  providedIn: 'root'
})
export class TramitesTiposService {

  private url: string = "http://localhost:3306/TramitesTipos";

  constructor(private http: HttpClient) { }

  // Obtener todos los trámites.

  getAll(): Observable<TramitesTipos[]>{
    return this.http.get<TramitesTipos[]>(this.url,);
  }

  // Crear un trámite.

  create(tramiteTipos: TramitesTipos): Observable<TramitesTipos>{
    return this.http.post<TramitesTipos>(this.url, tramiteTipos);
  }

  // Obtener un trámite.

  get(id:number): Observable<TramitesTipos[]>{
    return this.http.get<TramitesTipos[]>(this.url+ '/' +id);
  }

  // Actualizar un trámite.
  update(tramitesTipos: TramitesTipos): Observable<TramitesTipos>{
    return this.http.put<TramitesTipos>(this.url, tramitesTipos);
  }

  // Eliminar un trámite.

  delete(id:number): Observable<TramitesTipos[]>{
    return this.http.delete<TramitesTipos[]>(this.url+ '/' +id);
  }
}
