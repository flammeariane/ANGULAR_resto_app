import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap, switchMap } from 'rxjs/operators';
import { ScheduleService } from '../services/schedule.service';
import { EveningEvent } from '../models/event';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    searchInput = new FormControl();
    searchInputs$: Observable<string> = this.searchInput.valueChanges;
    result: EveningEvent[] = [];

    constructor(private scheduleService: ScheduleService) {}

    ngOnInit() {
        this.searchInputs$
            .pipe(
                debounceTime(1000),
                switchMap(term => this.scheduleService.search(term)),
                tap(x => console.log(x))
            )
            .subscribe(data => (this.result = data));
    }
}
