import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  
  @Input() color: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
