import { MenuService } from './menu.service/menu.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";




@Injectable()
export class PedidosGuard implements CanActivate {

   constructor(private router: Router, private menuService: MenuService) { }

    canActivate(): Observable <boolean>  {

     return this.menuService.itsActived().pipe(map(
          (res) => {
        if (res) {
          return true;

        } else {
          this.router.navigate(['/errorPedidos']);
          return false;

        }

        }));

    }


}
