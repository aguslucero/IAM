import { MenusAdminComponent } from './../menus-admin/menus-admin.component';
import { Component, OnInit, Inject } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu';
import { MenuService } from 'src/app/services/menu.service/menu.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})


export class CreateMenuComponent implements OnInit {

  menus = [];
  file: File;
  fotoSeleccionada: string | ArrayBuffer;
  menu = new Menu();

  constructor(private menuService: MenuService, public dialogRef: MatDialogRef<MenusAdminComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

  newPhoto(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.fotoSeleccionada = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

   createMenu() {
    this.menuService.crearMenu( this.menu.title, this.file, this.menu.description , this.menu.price)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err),
    );

  }

}
