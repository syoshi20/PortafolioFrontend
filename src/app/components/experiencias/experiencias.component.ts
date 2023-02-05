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
  @Output() onDeleteExperiencia:EventEmitter<any>= new EventEmitter()
 
   constructor(private serviceExperiencia:ExperienciaService) { }
 
   ngOnInit(): void {
     this.serviceExperiencia.obtenerExperiencia().subscribe((data:Experiencia[]) =>{
       console.log(data);
       this.experienciaList=data;
       
     }); 
   }
 
   deleteExperiencia(experiencia:Experiencia){
    console.log(experiencia);
   this.serviceExperiencia.deleteExperiencia(experiencia).subscribe(()=>(
      this.experienciaList= this.experienciaList.filter((t:Experiencia) => t.id !== experiencia.id)
      ))
  }
  addExperiencia(experiencia:Experiencia){
    console.log(experiencia);
    this.serviceExperiencia.addExperiencia(experiencia).subscribe(experiencia =>
      this.experienciaList.push(experiencia))
  }
}
