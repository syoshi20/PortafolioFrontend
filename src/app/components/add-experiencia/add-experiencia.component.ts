
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  nombre:string="";
  descripcion:string="";
  logo:string="";
  estado:boolean=false;
  desde:string="";
  hasta:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length == 0){
      alert("Please add a empresa");
      return
    }
    const {nombre,descripcion,logo,estado,desde,hasta}= this
    const newExperiencia= {nombre,descripcion,logo,estado,desde,hasta}
  }

}
