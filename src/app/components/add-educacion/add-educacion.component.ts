import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  @Output() onAddEducacion: EventEmitter<any>= new EventEmitter();


  nombre:string="";
  titulo:string="";
  logo:string="";
  estado:boolean=false;
  desde:string="";
  hasta:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.titulo.length == 0){
      alert("Please add a titulo");
      return
    }
    const {nombre,titulo,logo,estado,desde,hasta}= this
    const newEducacion= {nombre,titulo,logo,estado,desde,hasta}
    this.onAddEducacion.emit(newEducacion);
  }

}
