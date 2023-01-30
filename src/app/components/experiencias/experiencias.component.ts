import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  @Input() experienciaList:any;
  @Output() onDeleteEdu:EventEmitter<any>= new EventEmitter()
 
   constructor(private datosPorfolio:PorfolioService) { }
 
   ngOnInit(): void {
     this.datosPorfolio.obtenerDatos().subscribe((data:any) =>{
       console.log(data);
       this.experienciaList=data.experiencia;
       
     }); 
   }
 
   onDelete(){
    
   }
}
