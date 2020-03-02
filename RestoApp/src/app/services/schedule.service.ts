import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { schedule } from '../models/schedules';
import { EveningEvent } from '../models/event';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    constructor(private httpClient: HttpClient) {}

    // tslint:disable-next-line: ban-types
    search(term): Observable<EveningEvent[]> {
        const termLowercase = term.toLocaleLowerCase();
        return (
            this.httpClient
                .get<schedule>('assets/schedules.json')
                // tslint:disable-next-line: no-string-literal
                .pipe(
                    map(result =>
                        result.events.filter(
                            event => event.title.toLocaleLowerCase().indexOf(term) > -1 || event.description.indexOf(term) > -1
                        )
                    ),
                    tap(filtdEvents => console.log('filtdEvents', filtdEvents))
                )
        );
    }
}
