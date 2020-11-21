import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()

export class OnlyAdmins implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authService.isAdmin.subscribe(isAdmin => {
            if(!isAdmin) {
                this.router.navigateByUrl('not-allowed')
            }
        })

        return this.authService.isAdmin;
    }
}