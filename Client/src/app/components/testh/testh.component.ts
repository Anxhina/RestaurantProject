import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {  ViewEncapsulation } from '@angular/core';
import { Reservation } from 'src/app/services/reservationmodel';
import {ValidateService} from '../../services/validate.service'
import {ReservationService } from '../../services/reservation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm }   from '@angular/forms';
import { trigger,state,style,transition,animate,keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-testh',
  encapsulation: ViewEncapsulation.None,

  templateUrl: './testh.component.html',
  styleUrls: ['./testh.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition('* => *', [
        query('div', style({transform: 'translateY(-150%)'})),
        query('div', 
        stagger('800ms', [
          animate('1500ms', style({transform: 'translateY(0)'}))
        ]))
      ])
    ]),
  ]
})
export class TesthComponent implements OnInit {
  image = ["background","background1", "background1"].map((n) => `../../../assets/images/${n}.png`);
  images = ["food","food1", "food2", "food3"].map((n) => `../../../assets/images/${n}.jpg`);
  public show:boolean = false;
  public buttonName:any = 'Show';
username: string;
_id: string
rev: string;
reviews: any=[];

  public review:boolean = false;
  public button:any = 'Show';
  constructor(public reservationService: ReservationService,
    private validateService: ValidateService,

    private flashMessage:FlashMessagesService
  ) { }
  ngOnInit(): void {
    this.resetFormRev();
    this.refreshReviewsList();
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  toggleR() {
    this.review = !this.review;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.review)  
      this.button = "Hide";
    else
      this.button = "Show";
  }



  resetFormRev(form?: NgForm) {
    if (form)
      form.reset();
    this.reservationService.selectedReview = {
      _id: "",
      username: "",
      rev: "",
  
    }
  }
  
  onSubmitRev(form: NgForm) {
  
      this.reservationService.postReview(form.value).subscribe((res) => {
        this.resetFormRev(form);
  
          this.refreshReviewsList();
  
    
      });
   
  
    
  }
  
  refreshReviewsList() {
  this.reservationService.getReview()
  .subscribe(allmenu=> {
    this.reviews = allmenu;
  
  },
  
   err => {
     console.log(err);
     return false;
   });
  }
  

}
