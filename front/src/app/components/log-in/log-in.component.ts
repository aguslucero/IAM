import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = '';
  password = '';

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }

  login( ) {
    this.auth.login(this.email, this.password)
    .subscribe(  res => {
      localStorage.setItem('token', res.token);
      console.log(localStorage.getItem('token'));
    },
    err => console.log(err),
  );
  }

}
