import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-experiencias',
  templateUrl: './item-experiencias.component.html',
  styleUrls: ['./item-experiencias.component.css']
})
export class ItemExperienciasComponent implements OnInit {
@Input()experiencia:any;
@Output() onDeleteExperiencia: EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(experiencia:any){
    this.onDeleteExperiencia.emit(experiencia);

  }

}
