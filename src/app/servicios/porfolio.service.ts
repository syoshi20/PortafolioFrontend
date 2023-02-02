
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
    private apiUrl='http://localhost:5000';
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/porfolio');
  }
  obtenerEducacion():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/educacion');
  }
  obtenerSkill():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/skill');
  }
  obtenerProyecto():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/proyecto');
  }
  obtenerExperiencia():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/experiencia');
  }

  deleteDato(dato:any):Observable<any>{
    const url= '${this.apiUrl}/${dato.id}';
    return this.http.delete<any>(url)
  }

  modificarDatos(dato:any): Observable<any>{
    const url= '${this.apiUrl}/${dato.id}';
    return this.http.put<any>(url,dato,httpOptions)

  }
}
