import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
    reservationFrom: FormGroup;
    date = new Date();

    timeOptions = ['12:00', '12:30', '13:00', '19:00', '19:30', '20:00', '20:30'];
    numbersOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    client = { firstName: '', Name: '', email: '', phone: '' };
    isScheduleOk = false;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.reservationFrom = this.formBuilder.group({
            date: new Date(),
            time: '',
            number: 1
        });
    }

    saveDate() {
        if (this.reservationFrom.valid) {
            this.isScheduleOk = true;
        }
    }

    finalizeReservation(formValue) {
        console.log(formValue);
    }
}
