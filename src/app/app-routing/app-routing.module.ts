import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../vista1/login/login.component';
import { UsuarioComponent } from '../vista1/usuario/usuario.component';


const routes: Routes = [
  {path: 'inicio', component: UsuarioComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/inicio', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, UsuarioComponent]