import { CreateReservaAdminComponent } from './components/create-reserva-admin/create-reserva-admin.component';
import { PedidosGuard } from './services/pedidosGuard';
import { AuthGuard } from './services/AuthGuard';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { GaleriaAddComponent } from './components/galeria-add/galeria-add.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { MenusComponent } from './components/menus/menus.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MenusAdminComponent } from './components/menus-admin/menus-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ErrorPedidosComponent } from './components/error-pedidos/error-pedidos.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ComprarComponent } from './components/comprar/comprar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReservasAdminComponent } from './components/reservas-admin/reservas-admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    GaleriaComponent,
    GaleriaAddComponent,
    ReservasComponent,
    MenusComponent,
    LogInComponent,
    MenusAdminComponent,
    CreateMenuComponent,
    PedidosComponent,
    ErrorPedidosComponent,
    ComprarComponent,
    ReservasAdminComponent,
    CreateReservaAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTooltipModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [  AuthGuard, PedidosGuard ],
  entryComponents: [
    CreateMenuComponent,
    ComprarComponent,
    CreateReservaAdminComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
