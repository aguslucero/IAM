import { Menu } from './../../interfaces/Menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service/menu.service';

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


  constructor(private menuService: MenuService) {  }

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

}


