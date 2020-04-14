import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Reservation } from 'src/app/services/reservationmodel';
import { Review } from 'src/app/services/reviewmodel';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  options;
  selectedReservation: Reservation;
  selectedReview: Review;


  readonly baseURL= 'http://localhost:3000/reservation';
  readonly baseURL1= 'http://localhost:3000/review';



  constructor( private http: Http) { }



  postReservation(reservation: Reservation) {
    return this.http.post(this.baseURL, reservation)
    .pipe(map((response: any) => response.json()));
  }

    getReservation() {
      return this.http.get(this.baseURL, this.options)
      .pipe(map((response: any) => response.json()));
    }

  putReservation(reservation: Reservation) {
    return this.http.put(this.baseURL + `/${reservation._id}`, reservation);

  }
  deleteReservation(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }



  postReview(review: Review) {
    return this.http.post(this.baseURL1, review)
    .pipe(map((response: any) => response.json()));
  }

    getReview() {
      return this.http.get(this.baseURL1, this.options)
      .pipe(map((response: any) => response.json()));
    }


}