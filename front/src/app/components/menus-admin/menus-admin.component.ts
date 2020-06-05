import { ModMenuComponent } from './../mod-menu/mod-menu.component';
import { Menu } from 'src/app/interfaces/Menu';
import { CreateMenuComponent } from './../create-menu/create-menu.component';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service/menu.service';
import { MatDialog } from '@angular/material/dialog';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-menus-admin',
  templateUrl: './menus-admin.component.html',
  styleUrls: ['./menus-admin.component.css']
})
export class MenusAdminComponent implements OnInit {

  menus = [];
  file: File;
  fotoSeleccionada: string | ArrayBuffer;
  menu = new Menu();


  constructor(private menuService: MenuService, private dialog: MatDialog) {  }

  pathResolver(menus) {
    menus.forEach(function(value) {
      const re = /\\/gi;
      value.imagePath = value.imagePath.replace(re, '/');
  });
    console.log(this.menus);
 }

  ngOnInit() {
   this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus()
    .subscribe(
      res => {
        this.menus = res;
        this.pathResolver(this.menus);
        console.log(this.menus);
      },
      err => console.log(err),
    );

  }


  newPhoto(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.fotoSeleccionada = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  crearMenu(): void {
    const dialogRef = this.dialog.open(CreateMenuComponent, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMenus();
    });
  }


  modMenu(selectedMenu: Menu ): void {
    const dialogRef = this.dialog.open(ModMenuComponent, {
      width: '50%',
      data: {selectedMenu }
    });
    this.dialog.afterAllClosed.subscribe(data => {
      this.getMenus();
      console.log('anda el afterclosed1');
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getMenus();
      console.log('anda el afterclosed');
    });
  }

  deleteMenu(id: string) {
    this.menuService.deleteMenu(id)
    .subscribe(
      res => {
        console.log(res);
        this.getMenus();
      },
      err => console.log(err),
    );
  }

}



