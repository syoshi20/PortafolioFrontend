
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/experiencia';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  @Output() onAddExperiencia: EventEmitter<any>= new EventEmitter();
  
  nombreEmpresa:string="";
  puesto:string=""
  descripcion:string="";
  urlLogo:string="";
  desde:string="";
  hasta:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.puesto.length == 0){
      alert("Please add a puesto");
      return
    }
    const {nombreEmpresa,puesto,descripcion,urlLogo,desde,hasta}= this
    const newExperiencia= {nombreEmpresa,puesto,descripcion,urlLogo,desde,hasta}
    this.onAddExperiencia.emit(newExperiencia);
  }

}
