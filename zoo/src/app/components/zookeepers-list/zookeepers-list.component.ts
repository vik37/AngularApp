import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ZooService } from 'src/app/services/zoo.service';
import { Zookeeper } from '../../models/zookeepers.model';

@Component({
  selector: 'app-zookeepers-list',
  templateUrl: './zookeepers-list.component.html',
})
export class ZookeepersListComponent implements OnInit, OnDestroy {
  zookeepers: Zookeeper[];
  subscription = new Subscription();

  constructor(private zooService: ZooService) { }

  ngOnInit() {
    this.subscription.add(
      this.zooService.zookeepers.subscribe(zookeepers => {
        this.zookeepers = zookeepers
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
