import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  @Input() experienciaList:Experiencia[]=[];
  @Output() onDeleteEdu:EventEmitter<any>= new EventEmitter()
 
   constructor(private serviceExperiencia:ExperienciaService) { }
 
   ngOnInit(): void {
     this.serviceExperiencia.obtenerExperiencia().subscribe((data:Experiencia[]) =>{
       console.log(data);
       this.experienciaList=data;
       
     }); 
   }
 
   onDelete(){
    
   }
}
