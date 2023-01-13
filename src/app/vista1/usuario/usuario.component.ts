import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const UsuarioSubComponents = [
  EncabezadoComponent,
  BannerComponent,
  ExperienciaComponent,
  HabilidadesComponent,
  ProyectosComponent,
]