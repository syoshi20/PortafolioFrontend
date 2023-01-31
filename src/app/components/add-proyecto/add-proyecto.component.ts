import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  nombre:string="";
  descripcion:string="";
  url:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length == 0){
      alert("Please add a proyecto");
      return
    }
    const {nombre,descripcion,url}= this
    const newProyecto= {nombre,descripcion,url}
  }

}
