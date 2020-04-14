import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, query, stagger } from '@angular/animations';
import { EditMenuService } from '../../services/editmenu.service';
import { Router } from '@angular/router';
import {  ViewEncapsulation } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-menu',
  encapsulation: ViewEncapsulation.None,

  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition('* => *', [
        query('div', style({transform: 'translateY(-100%)'})),
        query('div', 
        stagger('800ms', [
          animate('1500ms', style({transform: 'translateY(0)'}))
        ]))
      ])
    ]),
  ]
})
export class MenuComponent implements OnInit {
  image = [4, 2, 1, 3].map((n) => `../../../assets/images/${n}.jpg`);


  images = [1,2,1,1,1,1,1,1].map((n) => `../../../assets/images/${n}.jpg`);
  imagesP = [2,2,2,2,2,2,2,2].map((n) => `../../../assets/images/${n}.jpg`);
  imagesD = [2,2,2,2,2,2,2,2].map((n) => `../../../assets/images/${n}.jpg`);
  imagesDr = [2,2,2,2,2,2,2,2].map((n) => `../../../assets/images/${n}.jpg`);
  imagesF= [2,2,1,1,1,2,2,2].map((n) => `../../../assets/images/${n}.jpg`);

  p= String;
  pastas: any = [];
  meat: any =[];
  fish: any =[];
  dessert: any =[];
  drink: any =[];
  ditore: any=[];
  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      this.images.push(arr.slice(i, i + chunkSize));
    }
    return this.images;
  }

  constructor(private editmenuService:EditMenuService, private router:Router) { }

  ngOnInit() {

    //Dispaly Meny Ditore
    this.editmenuService.getDitore().subscribe(allmenu=> {
      this.ditore = allmenu;
    },
     err => {
       console.log(err);
       return false;
     });

    //Display Pasta
    this.editmenuService.getPasta().subscribe(allpastas=> {
      this.pastas = allpastas;
    },
     err => {
       console.log(err);
       return false;
     });

    //Display Meat
    this.editmenuService.getMeat().subscribe(allmeat => {
      this.meat = allmeat;
    },
     err => {
       console.log(err);
       return false;
     });

     //Display Fish
     this.editmenuService.getFish().subscribe(allfish => {
      this.fish = allfish;
    },
     err => {
       console.log(err);
       return false;
     });

     //Display Dessert
     this.editmenuService.getDessert().subscribe(alldessert => {
      this.dessert = alldessert;
    },
     err => {
       console.log(err);
       return false;
     });

     //Display Drink
     this.editmenuService.getDrink().subscribe(alldrinks => {
      this.drink = alldrinks;
    },
     err => {
       console.log(err);
       return false;
     });
     
  }
  getUrl()
  {
    return "url('../../../assets/images/menu1.jpg')";
  }


}
