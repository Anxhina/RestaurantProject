import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Drink } from './menumodel';
import { Ditore } from './menumodel';
import { Meat } from './menumodel';
import { Fish } from './menumodel';
import { Dessert } from './menumodel';
import { Pasta } from './menumodel';


@Injectable({
  providedIn: 'root'

})
export class EditMenuService {
  selectedDitore: Ditore;
  selectedPasta: Pasta;
  selectedMeat: Meat;
  selectedFish: Fish;
  selectedDessert: Dessert;
  selectedDrink: Drink;


  options;
  readonly baseURL = 'http://localhost:3000/ditore';
  readonly baseURL1 = 'http://localhost:3000/pasta';
  readonly baseURL2 = 'http://localhost:3000/fish';
  readonly baseURL3 = 'http://localhost:3000/meat';
  readonly baseURL4= 'http://localhost:3000/drink';
  readonly baseURL5= 'http://localhost:3000/dessert';


  constructor( private http: Http) { }


  // DItore 

  postDitore(dite: Ditore) {
    return this.http.post(this.baseURL, dite);  }

    getDitore() {
      return this.http.get(this.baseURL, this.options)
      .pipe(map((response: any) => response.json()));
    }

  putDitore(dite: Ditore) {
    return this.http.put(this.baseURL + `/${dite._id}`, dite);

  }
  deleteDitore(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  // end ditore



  // Post, get, put and delete Pasta 

  postPasta(pasta: Pasta) {
    return this.http.post(this.baseURL1, pasta);  }

    getPasta() {
      return this.http.get(this.baseURL1, this.options)
      .pipe(map((response: any) => response.json()));
    }

  putPasta(pasta: Pasta) {
    return this.http.put(this.baseURL1 + `/${pasta._id}`, pasta);

  }
  deletePasta(_id: string) {
    return this.http.delete(this.baseURL1 + `/${_id}`);
  }
  // end Pasta



    // Post, get, put and delete Fish 

    postFish(fish: Fish) {
      return this.http.post(this.baseURL2, fish);  }
  
      getFish() {
        return this.http.get(this.baseURL2, this.options)
        .pipe(map((response: any) => response.json()));
      }
  
    putFish(fish: Fish) {
      return this.http.put(this.baseURL2 + `/${fish._id}`, fish);
  
    }
    deleteFish(_id: string) {
      return this.http.delete(this.baseURL2 + `/${_id}`);
    }
    // end Fish


       // Post, get, put and delete Meat 

       postMeat(meat: Meat) {
        return this.http.post(this.baseURL3, meat);  }
    
        getMeat() {
          return this.http.get(this.baseURL3, this.options)
          .pipe(map((response: any) => response.json()));
        }
    
      putMeat(meat: Meat) {
        return this.http.put(this.baseURL3 + `/${meat._id}`, meat);
    
      }
      deleteMeat(_id: string) {
        return this.http.delete(this.baseURL3 + `/${_id}`);
      }
      // end Meat

       // Post, get, put and delete drink 

       postDrink(drink: Drink) {
        return this.http.post(this.baseURL4, drink);  }
    
        getDrink() {
          return this.http.get(this.baseURL4, this.options)
          .pipe(map((response: any) => response.json()));
        }
    
      putDrink(drink: Drink) {
        return this.http.put(this.baseURL4 + `/${drink._id}`, drink);
    
      }
      deleteDrink(_id: string) {
        return this.http.delete(this.baseURL4 + `/${_id}`);
      }
      // end Drink


        // Post, get, put and delete Dessert 

        postDessert(dessert: Dessert) {
          return this.http.post(this.baseURL5, dessert);  }
      
          getDessert() {
            return this.http.get(this.baseURL5, this.options)
            .pipe(map((response: any) => response.json()));
          }
      
        putDessert(dessert: Dessert) {
          return this.http.put(this.baseURL5 + `/${dessert._id}`, dessert);
      
        }
        deleteDessert(_id: string) {
          return this.http.delete(this.baseURL5 + `/${_id}`);
        }
        // end Drink
      

}

