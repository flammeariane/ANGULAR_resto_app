import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
    providedIn: 'root'
})
export class QuickService {
    burgers: Food[] = [
        { id: 1, title: 'American', description: 'The real Us composition', price: 7.0 },
        { id: 2, title: 'Italian', description: 'The real italian composition', price: 6.0 },
        { id: 3, title: 'Suisse', description: 'The real Suisse composition', price: 8.0 },
        { id: 4, title: 'spanish', description: '', price: 10.0 }
    ];

    vegans: Food[] = [
        { id: 1, title: 'Siccilia', description: 'The vegan food', price: 7.0 },
        { id: 2, title: 'DiMare', description: 'The real vegan food', price: 6.0 },
        { id: 3, title: 'Terra', description: 'The real vegan food', price: 8.0 }
    ];

    desserts: Food[] = [
        { id: 1, title: 'PannaCotta', description: 'The real PananCotta Dessert', price: 7.0 },
        { id: 2, title: 'Tiramissu', description: 'The real Tiramissu Dessert', price: 6.0 },
        { id: 3, title: 'Fruits', description: 'The Fruits', price: 8.0 }
    ];
    constructor() {}

    getBurgers(): Food[] {
        return this.burgers;
    }
    getVegans(): Food[] {
        return this.vegans;
    }
    getDesserts(): Food[] {
        return this.desserts;
    }
}
