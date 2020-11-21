import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authService.isAuthenticated.subscribe(isAuth => {
            if (!isAuth) {
                this.router.navigateByUrl('/login');
            }
        })
        
        return this.authService.isAuthenticated;
    }

    // canActivateChild() {

    // }
}