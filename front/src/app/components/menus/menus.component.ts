import { ComprarComponent } from './../comprar/comprar.component';
// componenete que muestra los menus ejecutivos disponibles para la venta
import { Component, OnInit } from '@angular/core';
import { MenuService} from '../../services/menu.service/menu.service';
import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus = [];

  constructor(private menuService: MenuService, public dialog: MatDialog) {  }



  ngOnInit() {
 this.getMenus();
  }

  pathResolver(menus) {
    menus.forEach(function(value) {
      const re = /\\/gi;
      value.imagePath = value.imagePath.replace(re, '/');
  });
    console.log(this.menus);
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

openDialog( menu: any): void {
  const dialogRef = this.dialog.open(ComprarComponent, {
    panelClass: 'custom-dialog-container',
    width: '50%',
    data: {menu}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}


