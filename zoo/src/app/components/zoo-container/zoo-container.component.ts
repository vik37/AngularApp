import { Component, OnInit, } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-zoo-container',
  templateUrl: './zoo-container.component.html',
})

export class ZooContainerComponent implements OnInit {

  constructor(private zooService: ZooService, private authService: AuthService) { }

  ngOnInit() {
    this.zooService.getAnimals();
    this.authService.isAuthenticated.subscribe(a => a)
  }

}
