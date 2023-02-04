import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() proyectoList:Proyecto[]=[];
  @Output() onDeleteEdu:EventEmitter<any>= new EventEmitter()
 
   constructor(private serviceProyecto:ProyectoService) { }
 
   ngOnInit(): void {
     this.serviceProyecto.obtenerProyecto().subscribe((data:Proyecto[]) =>{
       console.log(data);
       this.proyectoList=data;
       
     }); 
   }
 
   onDelete(){
    
   }

}
