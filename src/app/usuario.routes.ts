import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './components/usuario-detalle.component';
import { UsuarioEditarComponent} from "./components/usuario-editar.component";
import { UsuarioNuevoComponent } from './components/usuario-nuevo.component';


export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'editar' },
]
 
  

