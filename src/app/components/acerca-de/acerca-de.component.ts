import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  miPorfolio:Perfil[]=[];

  constructor(private servicePerfil:PerfilService) { }

  ngOnInit(): void {
    this.servicePerfil.obtenerPerfil().subscribe((data:Perfil[]) =>{
      console.log(data);
      this.miPorfolio=data;
      
    });
  }

}
