import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../proyecto';
import { environment } from 'src/environments/environment';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiUrl=environment.apiBaseUrl;
    
  constructor(private http:HttpClient) { }

  obtenerProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiUrl}/ver/proyecto`);
  }
  addProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiUrl}/new/proyecto`,proyecto);
  }
  editProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiUrl}/edit/proyecto`,proyecto);
  }
  deleteProyecto(proyecto:Proyecto):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/proyecto/${proyecto.id}`);
  }
}
