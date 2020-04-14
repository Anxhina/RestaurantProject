import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {ReservationService } from '../../services/reservation.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm }   from '@angular/forms';
import { Reservation } from 'src/app/services/reservationmodel';
import {ValidateService} from '../../services/validate.service'
import { Response } from '@angular/http';
import { MatTableDataSource } from '@angular/material/table';
import {  ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-reservation',
  encapsulation: ViewEncapsulation.None,

  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  _id: string;
  date: string;
  time: string;
  name: string;
  number: string;
  specification: string
  persons: string;
  reservations: MatTableDataSource<any>;

  constructor(public reservationService: ReservationService,
    private validateService: ValidateService,

    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.resetFormRe();
    this.refreshReservationList();

  }


  resetFormRe(form?: NgForm) {
    if (form)
      form.reset();
    this.reservationService.selectedReservation = {
      _id: "",
      name: "",
      date: "",
      time: "",
      specification: "",
      number: "",
      persons: ""
    }
  }
  
  refreshReservationList() {
    this.reservationService.getReservation()
    .subscribe(allmenu=> {
      this.reservations = allmenu;
      this.reservations = new MatTableDataSource(allmenu);
      this.refreshReservationList();

   
    
    
    
    },
    
     err => {
       console.log(err);
       return false;
     });
    }

    // Register reservation from client
  onRegisterSubmit(form: NgForm){
    const reservation = {
      _id: this._id,
      name: this.name,
      time: this.time,
      date: this.date,
      persons: this.persons,
      specification: this.specification,
      number: this.number
    }

    if(!this.validateService.validateReservation(reservation)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    this.reservationService.postReservation(form.value).subscribe((data) => {
      const date = new Date(data.date).toDateString();
      this.resetFormRe(form);
      this.flashMessage.show('Reservation register', {cssClass: 'alert-success', timeout: 3000});


      // if(data.success){
      //   this.resetFormRe();

      //   this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
      //   this.router.navigate(['/reservation']);
      // } else {
      //   this.router.navigate(['/reservation']);
      // }
    });
  
}


}
