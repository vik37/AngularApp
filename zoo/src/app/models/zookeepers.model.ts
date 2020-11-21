import { Animal } from './animal.model';

export interface Zookeeper {
    id: string;
    name: string;
    address: string;
    admin: boolean;
    email: string;
    password: string;
    age: number;
    assignedAnimals: Animal[];
}