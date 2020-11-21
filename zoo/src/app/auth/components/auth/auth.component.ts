import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  subscription = new Subscription()

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['ivo@zoo.mk', Validators.required],
      password: ['Password', Validators.required]
    })

    this.subscription.add(
      this.authService.isAuthenticated.subscribe(isAuth => {
        if (isAuth) {
          this.router.navigateByUrl('/zoo/animals')
        }
      })
    )
  }

  login() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
