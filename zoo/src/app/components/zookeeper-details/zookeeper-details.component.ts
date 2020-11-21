import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Animal } from 'src/app/models/animal.model';
import { Zookeeper } from 'src/app/models/zookeepers.model';
import { ZooService } from 'src/app/services/zoo.service';
import { AssignAnimalsFormComponent } from '../assign-animals-form/assign-animals-form.component';

@Component({
  selector: 'app-zookeeper-details',
  templateUrl: './zookeeper-details.component.html',
})
export class ZookeeperDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('address') address: ElementRef;
  @ViewChild(AssignAnimalsFormComponent, { static: false }) assignAnimalsFormComp: AssignAnimalsFormComponent;

  zookeeper: Zookeeper;
  allAnimals: Animal[] = [];
  zookeeperId: string = '';
  subscription = new Subscription();

  constructor(private zooService: ZooService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(
      this.route.paramMap.pipe(
        mergeMap(params => {
          this.zookeeperId = params.get('id');
          return this.zooService.animals;
        }),
        switchMap((animals) => {
          this.allAnimals = animals;
          return this.zooService.zookeepers;
        }),
        map(zookeepers => zookeepers.find(z => z.id === this.zookeeperId))
      )
      .subscribe((zookeeper) => {
        if (zookeeper) {
          this.zookeeper = zookeeper;
        }
      })
    )
  }

  ngAfterViewInit() {
    // this.assignAnimalsFormComp.allAnimals;
  }

  onAddAnimal(animalId: string) {
    const animal = this.allAnimals.find(a => a.id === animalId);
    // this.assignedAnimals.push(animal);
    this.zookeeper.assignedAnimals = [...this.zookeeper.assignedAnimals, animal];
    this.allAnimals = this.allAnimals.filter(a => a.id !== animal.id)
  }

  onRemoveAnimal(animalId: string) {
    const animal = this.zookeeper.assignedAnimals.find(a => a.id === animalId);
    // this.allAnimals.push(animal);
    this.allAnimals = [...this.allAnimals, animal]
    this.zookeeper.assignedAnimals = this.zookeeper.assignedAnimals.filter(a => a.id !== animal.id)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
