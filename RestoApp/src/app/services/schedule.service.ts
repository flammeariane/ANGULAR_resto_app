import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { EveningEvent } from '../models/event';
import { schedule } from '../models/schedule';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    constructor(private httpClient: HttpClient) {}

    search(term: string): Observable<EveningEvent[]> {
        const termLowerCase = term.toLocaleLowerCase();
        return this.httpClient
            .get<schedule>('assets/schedules.json')
            .pipe(
                map(res =>
                    res.events.filter(
                        evt =>
                            evt.title.toLocaleLowerCase().indexOf(termLowerCase) > -1 ||
                            evt.description.toLocaleLowerCase().indexOf(termLowerCase) > -1
                    )
                )
            );
    }
}
