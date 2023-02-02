import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-item-proyectos',
  templateUrl: './item-proyectos.component.html',
  styleUrls: ['./item-proyectos.component.css']
})
export class ItemProyectosComponent implements OnInit {
   @Input()proyecto:any;

  constructor() { }

  ngOnInit(): void {
  }

}
