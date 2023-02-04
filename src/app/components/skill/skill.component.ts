import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from 'src/app/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skilList:Skill[]=[];
  @Output() onDeleteSkill:EventEmitter<any>= new EventEmitter()
 
   constructor(private serviceSkill:SkillService) { }
 
   ngOnInit(): void {
     this.serviceSkill.obtenerSkill().subscribe((data:any) =>{
      
      
       this.skilList=data;
       
     }); 
   }
 
   deleteSkill(skill:Skill){
    console.log(skill);
   this.serviceSkill.deleteSkill(skill).subscribe(()=>(
      this.skilList= this.skilList.filter((t:Skill) => t.id !== skill.id)
      ))
  }
}
