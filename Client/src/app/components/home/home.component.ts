import { Component, OnInit, Input,ViewChild } from '@angular/core';
import {  ViewEncapsulation } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger,state,style,transition,animate,keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition('* => *', [
        query('p', style({transform: 'translateY(-100%)'})),
        query('p', 
        stagger('1200ms', [
          animate('1900ms', style({transform: 'translateY(100%)'}))
        ]))
      ])
    ]),
    trigger('Photo1Animation', [
      transition('* => *', [
        query('img', style({transform: 'translateX(-100%)'})),
        query('img', 
        stagger('1900ms', [
          animate('1500ms', style({transform: 'translateX(0)'}))
        ]))
      ])
    ]),
    trigger('Photo2Animation', [
      transition('* => *', [
        query('img', style({transform: 'translateY(100%)'})),
        query('img', 
        stagger('1900ms', [
          animate('1500ms', style({transform: 'translateY(0)'}))
        ]))
      ])
    ]),
   
   ]
})
export class HomeComponent implements OnInit {

  // images = [1, 2, 3].map((n) => `../../../assets/images/${n}.jpg`);
  
  menus = ["Pasta", "Meat", "Fish", "Dessert", "Drink"].map((string) => `${string}`);
  images = ["el6"].map((string) => `../../../assets/images/${string}.png`);
  images1 = ["el3"].map((string) => `../../../assets/images/${string}.png`);
  images2 = ["el4"].map((string) => `../../../assets/images/${string}.png`);
  images3 = ["el1"].map((string) => `../../../assets/images/${string}.png`);
  p= String;
  constructor() {  
  
  } 


  ngOnInit() {
  }
  getUrl()
  {
    return "url('../../../assets/images/menu.jpg')";
  }
}
