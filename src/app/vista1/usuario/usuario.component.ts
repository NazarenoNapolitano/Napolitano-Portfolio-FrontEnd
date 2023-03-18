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
  editMode = false;
  originalContent = '';
  content = 'Contenido original';

  // Función para mostrar el formulario de edición
  edit() {
    this.editMode = true;
    this.originalContent = this.content;
    this.content = '';
  }

  // Función para guardar los cambios del formulario de edición
  save() {
    // Guardar contenido editado en la base de datos
    this.dataService.saveContent(this.content).subscribe(() => {
      this.editMode = false; // Ocultar formulario de edición
    });
  }
}

export const UsuarioSubComponents = [
  EncabezadoComponent,
  BannerComponent,
  ExperienciaComponent,
  HabilidadesComponent,
  ProyectosComponent,
]