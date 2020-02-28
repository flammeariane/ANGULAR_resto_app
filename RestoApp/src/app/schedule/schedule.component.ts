import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    searchInput = new FormControl();
    searchInputs$: Observable<string> = this.searchInput.valueChanges;

    constructor() {}

    ngOnInit() {
        this.searchInputs$
            .pipe(
                tap(x => console.log('avant map', x)),
                debounceTime(1000),
                map(x => x.toLocaleUpperCase()),
                tap(x => console.log('apres map', x))
            )
            .subscribe(data => console.log(data.length));
    }
}
