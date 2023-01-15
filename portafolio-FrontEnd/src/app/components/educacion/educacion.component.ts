import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

 @Input() miPorfolio:any;
 @Output() onDeleteEdu:EventEmitter<any>= new EventEmitter()

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data:any) =>{
      console.log(data);
      this.miPorfolio=data;
      
    }); 
  }

  onDelete(){
   
  }
}
