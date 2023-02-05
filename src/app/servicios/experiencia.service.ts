import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../experiencia';
import { environment } from 'src/environments/environment';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiUrl=environment.apiBaseUrl;
    
  constructor(private http:HttpClient) { }

  obtenerExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiUrl}/ver/experiencia`);
  }
  addExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiUrl}/new/experiencia`,experiencia,httpOptions);
  }
  editExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiUrl}/edit/experiencia`,experiencia);
  }
  deleteExperiencia(experiencia:Experiencia):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/experiencia/${experiencia.id}`);
  }
}
