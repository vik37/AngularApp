import { Component } from '@angular/core';

@Component({
    template: `
        <h1>You are not allowed to view this page! <a routerLink="/zoo/animals">go back</a></h1>    
    `
})
export class NotAllowedComponent {}