import { ReservasAdminComponent } from './components/reservas-admin/reservas-admin.component';
import { PedidosGuard } from './services/pedidosGuard';
import { ErrorPedidosComponent } from './components/error-pedidos/error-pedidos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { AuthGuard } from './services/AuthGuard';
import { MenusAdminComponent } from './components/menus-admin/menus-admin.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MenusComponent } from './components/menus/menus.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { GaleriaAddComponent } from './components/galeria-add/galeria-add.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

// rutas de usuario
{
  path: '',
  component: HomeComponent

},
{
  path: 'galeria',
  component: GaleriaComponent,
},
{
  path: 'reserva',
  component: ReservasComponent,
},
{
  path: 'menus',
  component: MenusComponent,
  canActivate: [PedidosGuard],

},
 {
  path: 'errorPedidos',
  component: ErrorPedidosComponent,

 },

// rutas de administrador
{
  path: 'admin',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'adminLogIn',
  component: LogInComponent
},
{
  path: 'adminGaleria',
  component: GaleriaAddComponent,
  canActivate: [AuthGuard]
},
{
  path: 'adminPedidos',
  component: MenusAdminComponent,
  canActivate: [AuthGuard]
},
{
  path: 'adminPedidosPendientes',
  component: PedidosComponent,
  canActivate: [AuthGuard]

},

{
  path: 'adminReservas',
  component: ReservasAdminComponent,
  canActivate: [AuthGuard]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
