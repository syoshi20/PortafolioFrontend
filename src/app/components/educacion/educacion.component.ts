import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

 @Input() educacionList:any;
 @Output() onDeleteEdu:EventEmitter<any>= new EventEmitter()

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerEducacion().subscribe(data =>{
      console.log(data);
      this.educacionList=data;
      
    }) 
  }

  onDelete(){
   
  }
}
