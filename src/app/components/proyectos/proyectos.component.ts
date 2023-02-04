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
  @Output() onDeleteProyecto:EventEmitter<any>= new EventEmitter()
 
   constructor(private serviceProyecto:ProyectoService) { }
 
   ngOnInit(): void {
     this.serviceProyecto.obtenerProyecto().subscribe((data:Proyecto[]) =>{
       console.log(data);
       this.proyectoList=data;
       
     }); 
   }
 
   deleteProyecto(proyecto:Proyecto){
    console.log(proyecto);
   this.serviceProyecto.deleteProyecto(proyecto).subscribe(()=>(
      this.proyectoList= this.proyectoList.filter((t:Proyecto) => t.id !== proyecto.id)
      ))
  }

}
