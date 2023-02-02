import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-item-experiencias',
  templateUrl: './item-experiencias.component.html',
  styleUrls: ['./item-experiencias.component.css']
})
export class ItemExperienciasComponent implements OnInit {
@Input()experiencia:any;
  constructor() { }

  ngOnInit(): void {
  }

}
