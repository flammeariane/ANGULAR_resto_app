import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

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
                debounceTime(1000),
                map(x => x.toLocaleUpperCase())
            )
            .subscribe(data => console.log(data));
    }
}
