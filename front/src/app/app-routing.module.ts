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
  component: GaleriaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
