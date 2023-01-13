import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent, UsuarioSubComponents } from './usuario/usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    UsuarioComponent,
    UsuarioSubComponents
  ],
  declarations: [
    LoginComponent,
    UsuarioComponent,
    UsuarioSubComponents
  ]
})
export class Vista1Module { }