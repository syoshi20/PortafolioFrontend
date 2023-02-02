import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-item-acerca-de',
  templateUrl: './item-acerca-de.component.html',
  styleUrls: ['./item-acerca-de.component.css']
})
export class ItemAcercaDeComponent implements OnInit {
  @Input() perfil:any;

  constructor() { }

  ngOnInit(): void {
  }

}
