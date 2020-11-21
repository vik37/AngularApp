import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Pipe({
    name: 'animalsToList'
})

export class AnimalsToListPipe implements PipeTransform  {

    transform(animals: Animal[]): string  {
        return animals.reduce((acc, cur, index) => {
            return acc += cur.name + (animals.length - 1 === index ? '' : ', ')
        }, '')
    }
}