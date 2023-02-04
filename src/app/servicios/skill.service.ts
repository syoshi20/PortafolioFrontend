import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../skill';
import { environment } from 'src/environments/environment';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl=environment.apiBaseUrl;
    
  constructor(private http:HttpClient) { }

  obtenerSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiUrl+'/ver/skill');
  }
  addSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(this.apiUrl+'/new/skill',skill);
  }
  editSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>(this.apiUrl+'/edit/skill',skill);
  }
  deleteSkill(skill:Skill):Observable<void>{
    return this.http.delete<void>(this.apiUrl+'/delete/skill/${skill.id}');
  }
}
