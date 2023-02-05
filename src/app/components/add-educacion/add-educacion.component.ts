import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/educacion';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  @Output() onAddEducacion: EventEmitter<any>= new EventEmitter();

  titulo:string="";
  nombreInstituto:string="";
  urlLogo:string="";
  estado:boolean=false;
  desde:string= "";
  hasta:string= "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.titulo.length == 0){
      alert("Please add a titulo");
      return
    }
    const {titulo,nombreInstituto,urlLogo,estado,desde,hasta}= this
    const newEducacion= {titulo,nombreInstituto,urlLogo,estado,desde,hasta}
    this.onAddEducacion.emit(newEducacion);
  }

}
