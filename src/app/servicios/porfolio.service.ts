
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
    private apiUrl='./assets/data/db.json';

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  modificarDatos(id:number){

  }

  deleteDato(id:number):Observable<any>{
    const url= '${this.apiUrl}/${id}';
    return this.http.delete<any>(url)
  }
}
