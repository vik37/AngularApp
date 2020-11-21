import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Animal } from '../models/animal.model';
import { Zookeeper } from '../models/zookeepers.model';
import { ZooRepoService } from './zoo-repo.service';
import { v4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class ZooService {
    private _animals: BehaviorSubject<Animal[]> = new BehaviorSubject<Animal[]>([]);
    private _zookeepers: BehaviorSubject<Zookeeper[]> = new BehaviorSubject<Zookeeper[]>([]);

    get animals(): Observable<Animal[]> {
        return this._animals.asObservable()
    }

    get zookeepers(): Observable<Zookeeper[]> {
        return this._zookeepers.asObservable()
    }
    
    constructor(private zooRepoService: ZooRepoService) {}


    getAnimals() {
        this.zooRepoService.getAnimals().subscribe(animals => {
            // console.log('zooRepoService.getAnimals()', animals)
            this._animals.next(animals);
        });
    }
    
    getZookeepers() {
        this.zooRepoService.getZookeepers().subscribe(zookeepers => {
            this._zookeepers.next(zookeepers);
        });
    }

    addAnimal(animal: Animal) {
        let animals = this._animals.getValue(); // allready existing animals
        const newAnimal = {...animal, id: v4() } // adding id
        animals = [...animals, newAnimal]; // creating new animal to the list
        this._animals.next(animals); // adding and saving the new list of animals
    }

    editAnimal(animal: Animal) {
        let animals = this._animals.getValue();
        let index = animals.findIndex(a => a.id === animal.id);
        animals[index] = animal;
        this._animals.next(animals);
    }
}