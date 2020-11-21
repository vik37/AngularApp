import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZooService } from './services/zoo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor(private zooService: ZooService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.zooService.getZookeepers();

  }
}