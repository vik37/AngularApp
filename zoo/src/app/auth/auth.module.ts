import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { OnlyAdmins } from './services/only-admins.guard';
import { OnlyLoggedInUsersGuard } from './services/only-logged-in-users.guard';

@NgModule({
    declarations: [],
    providers: [AuthService, OnlyLoggedInUsersGuard, OnlyAdmins],
    imports: [ReactiveFormsModule, CommonModule],
})

export class AuthModule {}