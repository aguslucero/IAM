import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = '';
  password = '';
  error = false;

  constructor( private router: Router , private auth: AuthService) { }

  ngOnInit() {
  }

  login( ) {
    this.auth.login(this.email, this.password)
    .subscribe((res: Admin) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/admin']);
    },
    err => {
      console.log(err);
      this.error = true;
    }
  );
  }

}


export class Admin {
  admin: object;
  token: string;
}
