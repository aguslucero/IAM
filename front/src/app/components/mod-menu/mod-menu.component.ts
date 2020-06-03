import { MenusAdminComponent } from './../menus-admin/menus-admin.component';
import { Component, OnInit, Inject } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu';
import { MenuService } from 'src/app/services/menu.service/menu.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-mod-menu',
  templateUrl: './mod-menu.component.html',
  styleUrls: ['./mod-menu.component.css']
})
export class ModMenuComponent implements OnInit {


  menus = [];
  file: File;
  fotoSeleccionada: string | ArrayBuffer;
  menu = new Menu();

  constructor(private menuService: MenuService,
              public router: Router,
              public dialogRef: MatDialogRef<MenusAdminComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.menu.description = this.data.selectedMenu.description;
    this.menu.title = this.data.selectedMenu.title;
    this.menu.price = this.data.selectedMenu.price;
    this.menu.imagePath = this.data.selectedMenu.imagePath;
  }

  newPhoto(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.fotoSeleccionada = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

   updateMenu() {
    this.menuService.updateMenu( this.data.selectedMenu._id,  this.menu.title, this.file, this.menu.description , this.menu.price)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err),
    );
    this.dialogRef.close();
  }

}

