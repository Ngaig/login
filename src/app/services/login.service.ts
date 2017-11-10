import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
  isLoggedIn = false;
  redirectUrl: string;

  login(): boolean { // Observable<boolean> {
    // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    // console.log('went through');
    return this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
