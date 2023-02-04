import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-proyectos',
  templateUrl: './item-proyectos.component.html',
  styleUrls: ['./item-proyectos.component.css']
})
export class ItemProyectosComponent implements OnInit {
   @Input()proyecto:any;
   @Output() onDeleteProyecto: EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(proyecto:any){
    this.onDeleteProyecto.emit(proyecto);

  }

}
