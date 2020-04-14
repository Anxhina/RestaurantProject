import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }


  validateDitore(Ditore){
    if(Ditore.food == undefined || Ditore.description == undefined){
      return false;
    } else {
      return true;
    }
  }


  validatePasta(Pasta){
    if(Pasta.pasta == undefined || Pasta.descriptionp == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateMeat(Meat){
    if(Meat.meat == undefined || Meat.descriptionm == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateFish(Fish){
    if(Fish.fish == undefined || Fish.descriptionf == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateDessert(Dessert){
    if(Dessert.dessert == undefined || Dessert.descriptiond == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateDrink(Drink){
    if(Drink.drink == undefined || Drink.descriptiondr == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateReservation(Reservation){
    if(Reservation.name == undefined || Reservation.specification == undefined || Reservation.number == undefined || Reservation.date == undefined || Reservation.persons == undefined || Reservation.date == undefined || Reservation.time == undefined){
      return false;
    } else {
      return true;
    }
  }

}
