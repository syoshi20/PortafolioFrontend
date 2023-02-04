import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent implements OnInit {
 @Input() skill:any;
 @Output() onDeleteSkill: EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(skill:any){
    this.onDeleteSkill.emit(skill);

  }

}
