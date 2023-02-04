import { Component, OnInit ,Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent implements OnInit {
  @Input() educa:any;
  @Output() onDeleteEduca: EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(educa:any){
    this.onDeleteEduca.emit(educa);

  }

}
