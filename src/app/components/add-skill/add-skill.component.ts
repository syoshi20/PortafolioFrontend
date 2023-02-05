import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() onAddSkill: EventEmitter<any>= new EventEmitter();
  
  nombre:string="";
  porcentaje:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.nombre.length == 0){
      alert("Please add a skill");
      return
    }
    const {nombre,porcentaje}= this
    const newSkill= {nombre,porcentaje}
    this.onAddSkill.emit(newSkill);
  }

}

