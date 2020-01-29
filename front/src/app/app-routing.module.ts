import { MenusComponent } from './components/menus/menus.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { GaleriaAddComponent } from './components/galeria-add/galeria-add.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{
  path: '',
  component: HomeComponent

},
{
  path: 'galeria',
  component: GaleriaAddComponent
},
{
  path: 'reserva',
  component: ReservasComponent
},
{
  path: 'menus',
  component: MenusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
