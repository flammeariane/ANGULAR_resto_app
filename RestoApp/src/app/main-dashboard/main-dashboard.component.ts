import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuickService } from '../services/quick.service';
import { Food } from '../models/food.model';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }

            return [
                { title: 'Month Selected', cols: 2, rows: 1, id: 1 },
                { title: 'Vege', cols: 2, rows: 1, id: 2 },
                { title: 'Burger', cols: 2, rows: 1, id: 3 },
                { title: 'Desert', cols: 2, rows: 1, id: 4 }
            ];
        })
    );

    burgers: Food[];
    vegans: Food[];
    desserts: Food[];

    constructor(private breakpointObserver: BreakpointObserver, private quickServcie: QuickService) {}

    ngOnInit() {
        this.burgers = this.quickServcie.getBurgers();
        this.vegans = this.quickServcie.getVegans();
        this.desserts = this.quickServcie.getDesserts();
    }
}
