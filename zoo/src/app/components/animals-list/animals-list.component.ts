import { Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit, OnChanges, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { ZooService } from 'src/app/services/zoo.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html'
})
export class AnimalsListComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @ViewChild('searchInput') searchInput: ElementRef;
  // @ViewChildren()
  animals: Animal[] = [];
  filteredAnimals: Animal[] = [];
  subscription = new Subscription();

  constructor(private zooService: ZooService) { 
    console.log('constructor')
  }

  ngOnInit() {
    this.subscription.add(
      this.zooService.animals.subscribe(animals => {
        this.animals = animals;
        this.filteredAnimals = animals
      })
    )

    console.log('OnInit')
    // TERRIBLE PRACTISE!!!
    // document.getElementsByTagName('input').
  }

  ngOnChanges() {
    // console.log('OnChanges')
  }

  ngDoCheck() {
    // console.log('DoCheck')
  }

  ngAfterContentInit() {
    // console.log('AfterContentInit')
  }

  ngAfterContentChecked() {
    // console.log('AfterContentChecked')
  }

  ngAfterViewChecked() {
    // console.log('AfterViewChecked')
  }

  ngAfterViewInit() {
    // console.log('AfterViewInit')
    console.log(this.searchInput)
    this.searchInput.nativeElement.focus();
  }

  filterAnimals(event) {
    console.log(event)
    this.filteredAnimals = this.animals
            .filter(a =>
              a.species.toLowerCase()
              .includes(event.target.value.toLowerCase())
              )
  }

  ngOnDestroy() {
    // console.log('OnDestroy')
    this.subscription.unsubscribe()
  }
}
