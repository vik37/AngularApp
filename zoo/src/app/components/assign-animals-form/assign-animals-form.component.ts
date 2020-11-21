import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';

@Component({
  selector: 'app-assign-animals-form',
  templateUrl: './assign-animals-form.component.html',
})
export class AssignAnimalsFormComponent implements OnInit, OnDestroy {
  @Input() assignedAnimals: Animal[] = [];
  @Input() allAnimals: Animal[] = [];
  @Output() addAnimal: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeAnimal: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('OnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    // how it is used usually
    // if (changes && changes.assignedAnimals && !changes.assignedAnimals.firstChange) {}
    console.log('OnChanges', changes)
  }

  ngOnDestroy() {
    console.log('OnDestroy')
  }

}
