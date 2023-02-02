import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skilList:any;
  @Output() onDeleteSkill:EventEmitter<any>= new EventEmitter()
 
   constructor(private datosPorfolio:PorfolioService) { }
 
   ngOnInit(): void {
     this.datosPorfolio.obtenerSkill().subscribe((data:any) =>{
      
      
       this.skilList=data;
       
     }); 
   }
 
   onDelete(skill:any){
    this.onDeleteSkill.emit(skill);
   }
}
