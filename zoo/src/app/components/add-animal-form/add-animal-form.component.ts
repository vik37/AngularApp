import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Animal } from 'src/app/models/animal.model';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html'
})
export class AddAnimalFormComponent implements OnInit {
  animalForm: FormGroup;
  animalId: string = '';
  animal: Animal;
  isInEditMode: boolean = false;
  subscription = new Subscription();

  get nameValid() {
    return this.animalForm.get('name').invalid && (this.animalForm.get('name').touched || this.animalForm.get('name').dirty);
  }

  get speciesValid() {
    return this.animalForm.get('species').invalid && (this.animalForm.get('species').touched || this.animalForm.get('species').dirty);
  }

  get countryValid() {
    return this.animalForm.get('country').invalid && (this.animalForm.get('country').touched || this.animalForm.get('country').dirty);
  }

  get imageUrlValid() {
    return this.animalForm.get('imageUrl').invalid && (this.animalForm.get('imageUrl').touched || this.animalForm.get('imageUrl').dirty);
  }

  get genderValid() {
    return this.animalForm.get('gender').invalid && (this.animalForm.get('gender').touched || this.animalForm.get('gender').dirty);
  }

  constructor(
      private fb: FormBuilder,
      private zooService: ZooService,
      private router: Router,
      private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.isInEditMode = false;
    this.animalForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(12)])],
      species: ['', Validators.required],
      country: ['', Validators.maxLength(15)],
      imageUrl: ['', Validators.minLength(3)],
      gender: ['', Validators.required],
    })

    this.subscription.add(
      this.route.paramMap.pipe(
        mergeMap(params => {
          this.animalId = params.get('id');
          return this.zooService.animals
        }),
        map(animals => animals.find(a => a.id === this.animalId))
      )
      .subscribe(animal => {
        if (animal) {
          this.isInEditMode = true;
          this.animal = animal;
          this.animalForm.patchValue(animal);
          // this.animalForm.markAsTouched();
          // this.animalForm.markAllAsTouched();
          // this.animalForm.markAsDirty();
          // this.animalForm.get('name').markAsTouched();
          this.animalForm.updateValueAndValidity();
          console.log(animal)
        }
      })
    )
  }

  onSubmit() {
    const animal: Animal = {
      ...this.animal,
      ...this.animalForm.value
    }

    this.isInEditMode
    ? this.zooService.editAnimal(animal)
    : this.zooService.addAnimal(animal);
    this.router.navigateByUrl('/zoo/animals');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
