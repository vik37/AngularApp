import { Component, OnInit } from '@angular/core';
import { AnimalTemp } from './animal-temp.model';

@Component({
  selector: 'app-add-animal-form-temp',
  templateUrl: './add-animal-form-temp.component.html',
})
export class AddAnimalFormTempComponent implements OnInit {

  animal = new AnimalTemp(null, '', '', null, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.animal);
  }

}
