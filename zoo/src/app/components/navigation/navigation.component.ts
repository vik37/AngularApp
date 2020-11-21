import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(isAuth => {
      this.isAuth = isAuth
    })
  }

  auth() {
    this.authService.logout();
  }
}
