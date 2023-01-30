import { Component, OnInit } from '@angular/core';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faLinkedin=faLinkedin;
  faGithub=faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
