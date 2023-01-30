import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BotonesComponent } from './components/botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "showSubtitle": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
