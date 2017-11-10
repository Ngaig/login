import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]), // implement handling for required
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private loginService: LoginService ) {}

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login();
    this.router.navigateByUrl('/home');
  }

  log() { // remove later
    console.log(this.loginForm.value);
  }
}
