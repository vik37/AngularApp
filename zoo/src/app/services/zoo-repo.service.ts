import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';
import { map } from 'rxjs/operators';
import { Zookeeper } from '../models/zookeepers.model';

@Injectable({
    providedIn: 'root'
})

export class ZooRepoService {

    constructor(private http: HttpClient) {}

    getAnimals(): Observable<Animal[]> {
        return this.http.get('./../../assets/data/animals.json').pipe(
            map(res => (res as Animal[]))
        );
    }

    getZookeepers(): Observable<Zookeeper[]> {
        return this.http.get('./../../assets/data/zookeepers.json').pipe(
            map(res => (res as Zookeeper[]))
        );
    }
}