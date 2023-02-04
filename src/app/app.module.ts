import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BotonesComponent } from './components/botones/botones.component';
import { AddEducacionComponent } from './components/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { ItemEducacionComponent } from './components/item-educacion/item-educacion.component';
import { ItemAcercaDeComponent } from './components/item-acerca-de/item-acerca-de.component';
import { ItemProyectosComponent } from './components/item-proyectos/item-proyectos.component';
import { ItemSkillComponent } from './components/item-skill/item-skill.component';
import { ItemExperienciasComponent } from './components/item-experiencias/item-experiencias.component';

import { EducacionService } from './servicios/educacion.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { PerfilService } from './servicios/perfil.service';
import { ProyectoService } from './servicios/proyecto.service';
import { SkillService } from './servicios/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    BotonesComponent,
    AddEducacionComponent,
    AddExperienciaComponent,
    AddSkillComponent,
    AddProyectoComponent,
    ItemEducacionComponent,
    ItemAcercaDeComponent,
    ItemProyectosComponent,
    ItemSkillComponent,
    ItemExperienciasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "showSubtitle": false})
  ],
  providers: [
    EducacionService,
    ExperienciaService,
    PerfilService,
    ProyectoService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
