import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    displayNumber: string;

    standard = {
        firstName: 'benjamin',
        lastName: 'Button',
        role: 'Somelier',
        award: '',
        phone: '02/555.55.00'
    };

    standard2 = {
        firstName: 'robin',
        lastName: 'green',
        role: 'cuisto',
        award: '',
        phone: '02/555.00.55'
    };

    standard3 = {
        firstName: 'bob',
        lastName: 'Eponge',
        role: 'guard',
        award: '',
        phone: '02/555.55.55'
    };

    constructor() {}
    ngOnInit() {}

    displayzoom(event) {
        this.displayNumber = event;
    }
}
