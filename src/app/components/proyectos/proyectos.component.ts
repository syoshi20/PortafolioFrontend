import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() proyectoList:any;
  @Output() onDeleteEdu:EventEmitter<any>= new EventEmitter()
 
   constructor(private datosPorfolio:PorfolioService) { }
 
   ngOnInit(): void {
     this.datosPorfolio.obtenerDatos().subscribe((data:any) =>{
       console.log(data);
       this.proyectoList=data.proyecto;
       
     }); 
   }
 
   onDelete(){
    
   }

}
