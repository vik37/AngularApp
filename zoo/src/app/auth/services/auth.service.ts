import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ZooService } from 'src/app/services/zoo.service';
import { AuthModel } from '../models/auth.model';

@Injectable({providedIn: 'root'})

export class AuthService {

    private _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);

    get isAuthenticated(): Observable<boolean> {
        return this._isAuthenticated.asObservable()
    }

    get isAdmin(): Observable<boolean> {
        return this._isAdmin.asObservable();
    }

    constructor(private zooService: ZooService, private router: Router) {}

    login(authData: AuthModel) {
        console.log(authData)
        this.zooService.zookeepers.subscribe(zookeepers => {
            const zookeeper = zookeepers.find(zookeeper => zookeeper.email === authData.email)

            if (zookeeper) {
                zookeeper.password === authData.password;
                this._isAuthenticated.next(true);
                this._isAdmin.next(zookeeper.admin);
                this.router.navigateByUrl('/zoo/animals')
            }
        })
    }

    logout() {
        this._isAuthenticated.next(false);
        this.router.navigateByUrl('/login')
    }
}