import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent implements OnInit {
  @Input() educa:any;

  constructor() { }

  ngOnInit(): void {
  }

}
