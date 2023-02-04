import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../perfil';
import { environment } from 'src/environments/environment';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiUrl=environment.apiBaseUrl;
    
  constructor(private http:HttpClient) { }

  obtenerPerfil():Observable<Perfil[]>{
    return this.http.get<Perfil[]>(this.apiUrl+'/ver/perfil');
  }
  
  editPerfil(perfil:Perfil):Observable<Perfil>{
    return this.http.put<Perfil>(this.apiUrl+'/edit/perfil',perfil);
  }

}
