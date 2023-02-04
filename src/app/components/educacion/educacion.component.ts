import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';
import { Educacion } from 'src/app/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

 @Input() educacionList:Educacion[]=[];
 @Output() onDeleteEduca:EventEmitter<any>= new EventEmitter()

  constructor(private serviceEducacion:EducacionService) { }

  ngOnInit(): void {
    this.serviceEducacion.obtenerEducacion().subscribe((data:Educacion[]) =>{
      console.log(data);
      this.educacionList=data;
      
    }) 
  }

  deleteEducacion(educa:Educacion){
    console.log("delete educa");
   this.serviceEducacion.deleteEducacion(educa).subscribe(()=>(
      this.educacionList= this.educacionList.filter((t:Educacion) => t.id !== educa.id)
      ))
  }
  
}
