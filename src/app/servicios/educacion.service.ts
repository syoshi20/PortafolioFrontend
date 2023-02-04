import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../educacion';
import { environment } from 'src/environments/environment';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiUrl=environment.apiBaseUrl;
    
  constructor(private http:HttpClient) { }

  obtenerEducacion():Observable<Educacion[]>{
    
    return this.http.get<Educacion[]>(`${this.apiUrl}/ver/educacion`);
  }
  addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiUrl}/new/educacion`,educacion);
  }
  editEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiUrl}/edit/educacion`,educacion);
  }
  deleteEducacion(educacion:Educacion):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/educacion/${educacion.id}`);
  }
}
