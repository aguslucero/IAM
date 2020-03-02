import { AuthService } from './auth.service/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";




@Injectable()
export class AuthGuard implements CanActivate {
   loged: Boolean;

   constructor(private router: Router, private auth: AuthService) { }

    canActivate(): Observable <boolean>  {

     return this.auth.isLoged().pipe(map(
          (res) => {
        if (res){
          return true;
        } else {
          this.router.navigate(['/adminLogIn'])
          return false;

        }

        }));

    }


}
