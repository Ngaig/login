import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';


import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url; // constant?

    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    const url = '/${route.path}';

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn) { return true; }

    this.loginService.redirectUrl = url;

    this.router.navigate(['./login']);
    return false;
  }
}
