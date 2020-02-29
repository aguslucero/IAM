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
import { FormsModule } from '@angular/forms';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    CreateMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  entryComponents: [
    CreateMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
