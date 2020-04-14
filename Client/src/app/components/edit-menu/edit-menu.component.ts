import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {EditMenuService } from '../../services/editmenu.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm }   from '@angular/forms';
import { Ditore} from 'src/app/services/menumodel';
import { Pasta } from 'src/app/services/menumodel';
import { Fish } from 'src/app/services/menumodel';
import { Meat } from 'src/app/services/menumodel';
import { Drink } from 'src/app/services/menumodel';
import { Dessert } from 'src/app/services/menumodel';
import { Reservation } from 'src/app/services/reservationmodel';
import { Observable, interval, Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

import {ReservationService } from '../../services/reservation.service';
import {MatSort} from '@angular/material/sort';






declare var M: any;

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
  providers: [EditMenuService]

})
export class EditMenuComponent implements OnInit {
  _id: string;
  date: string;
  time: string;
  name: string;
  number: string;
  specification: string;
  persons: string;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.reservations.filter = filterValue.trim().toLowerCase();
  }
  private updateSubscription: Subscription;

  ditores: any = [];
  pastas: any = [];
  reservations: MatTableDataSource<any>;
  meats: any = [];
  fishs: any = [];
  desserts: any = [];
  drinks: any = [];
  public columns = ['date', 'name', 'time', 'number', 'persons', 'specification', 'cancel'];
  loadingReservation = false;

  
  pageSizeOptions;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public editmenuService: EditMenuService,
    private authService:AuthService,
    public reservationService:ReservationService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }


  ngOnInit() {
    this.resetForm();
    this.refreshDitoreList();
    this.resetFormP();
    this.refreshPastaList();
    this.resetFormF();
    this.refreshFishList();
    this.resetFormM();
    this.refreshMeatList();
    this.resetFormDr();
    this.refreshDrinkList();
    this.resetFormD();
    this.refreshDessertList();
    this.resetFormR();
    this.refreshReservationList();

//     this.updateSubscription = interval(600000).subscribe(
//       (val) => { this.refreshReservationList()
//     }
// );

}

// Reservation functions
resetFormR(form?: NgForm) {
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

onSubmitR(form: NgForm) {

    this.reservationService.postReservation(form.value).subscribe((res) => {
      const date = new Date(res.date).toDateString();
      this.resetFormR(form);

      if(res.success){
        this.refreshReservationList();

      
      } 
    });
 

  
}

refreshReservationList() {
this.reservationService.getReservation()
.subscribe(allmenu=> {
  this.reservations = allmenu;
  this.reservations = new MatTableDataSource(allmenu);
  this.reservations.sort = this.sort;
  this.reservations.paginator = this.paginator;



},

 err => {
   console.log(err);
   return false;
 });
}

onEditR(reservation: Reservation) {
  this.reservationService.selectedReservation = reservation;
}

onDeleteR(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.reservationService.deleteReservation(_id).subscribe((res) => {
      this.resetFormR(form);
  this.refreshReservationList();

      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}


reloadReservation() {
  this.loadingReservation = true; 
  this.refreshReservationList(); 
  setTimeout(() => {
    this.loadingReservation = false; 
  }, 4000);
}

  // Ditore functions

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.editmenuService.selectedDitore = {
      _id: "",
      food: "",
      description: ""
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.editmenuService.postDitore(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDitoreList();

      });
    }
    else {
      this.editmenuService.putDitore(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDitoreList();

        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshDitoreList() {
  this.editmenuService.getDitore().subscribe(allmenu=> {
    this.ditores = allmenu;
  },
   err => {
     console.log(err);
     return false;
   });
  }

  onEdit(dite: Ditore) {
    this.editmenuService.selectedDitore = dite;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.editmenuService.deleteDitore(_id).subscribe((res) => {
        this.resetForm(form);
    this.refreshDitoreList();

        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
// end ditore functions


// Pasta functions
resetFormP(form?: NgForm) {
  if (form)
    form.reset();
  this.editmenuService.selectedPasta = {
    _id: "",
    pasta: "",
    descriptionp: ""
  }
}

onSubmitP(form: NgForm) {
  if (form.value._id == "") {
    this.editmenuService.postPasta(form.value).subscribe((res) => {
      this.resetFormP(form);
      this.refreshPastaList();

    });
  }
  else {
    this.editmenuService.putPasta(form.value).subscribe((res) => {
      this.resetFormP(form);
      this.refreshPastaList();

      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}

refreshPastaList() {
this.editmenuService.getPasta().subscribe(allmenu=> {
  this.pastas = allmenu;
},
 err => {
   console.log(err);
   return false;
 });
}

onEditP(pasta: Pasta) {
  this.editmenuService.selectedPasta = pasta;
}

onDeleteP(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.editmenuService.deletePasta(_id).subscribe((res) => {
      this.resetFormP(form);
  this.refreshPastaList();

      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
// end Of pasta functions



// Fish functions
resetFormF(form?: NgForm) {
  if (form)
    form.reset();
  this.editmenuService.selectedFish = {
    _id: "",
    fish: "",
    descriptionf: ""
  }
}

onSubmitF(form: NgForm) {
  if (form.value._id == "") {
    this.editmenuService.postFish(form.value).subscribe((res) => {
      this.resetFormF(form);
      this.refreshFishList();

    });
  }
  else {
    this.editmenuService.putFish(form.value).subscribe((res) => {
      this.resetFormF(form);
      this.refreshFishList();

      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}

refreshFishList() {
this.editmenuService.getFish().subscribe(allmenu=> {
  this.fishs = allmenu;
},
 err => {
   console.log(err);
   return false;
 });
}

onEditF(fish: Fish) {
  this.editmenuService.selectedFish = fish;
}

onDeleteF(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.editmenuService.deleteFish(_id).subscribe((res) => {
      this.resetFormF(form);
  this.refreshFishList();

      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
// end Of fish functions



// Meat functions
resetFormM(form?: NgForm) {
  if (form)
    form.reset();
  this.editmenuService.selectedMeat = {
    _id: "",
    meat: "",
    descriptionm: ""
  }
}

onSubmitM(form: NgForm) {
  if (form.value._id == "") {
    this.editmenuService.postMeat(form.value).subscribe((res) => {
      this.resetFormM(form);
      this.refreshMeatList();

    });
  }
  else {
    this.editmenuService.putMeat(form.value).subscribe((res) => {
      this.resetFormM(form);
      this.refreshMeatList();

      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}

refreshMeatList() {
this.editmenuService.getMeat().subscribe(allmenu=> {
  this.meats = allmenu;
},
 err => {
   console.log(err);
   return false;
 });
}

onEditM(meat: Meat) {
  this.editmenuService.selectedMeat = meat;
}

onDeleteM(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.editmenuService.deleteMeat(_id).subscribe((res) => {
      this.resetFormM(form);
  this.refreshMeatList();

      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
// end Of meat functions



// Dessert functions
resetFormD(form?: NgForm) {
  if (form)
    form.reset();
  this.editmenuService.selectedDessert = {
    _id: "",
    dessert: "",
    descriptiond: ""
  }
}

onSubmitD(form: NgForm) {
  if (form.value._id == "") {
    this.editmenuService.postDessert(form.value).subscribe((res) => {
      this.resetFormD(form);
      this.refreshDessertList();

    });
  }
  else {
    this.editmenuService.putDessert(form.value).subscribe((res) => {
      this.resetFormD(form);
      this.refreshDessertList();

      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}

refreshDessertList() {
this.editmenuService.getDessert().subscribe(allmenu=> {
  this.desserts = allmenu;
},
 err => {
   console.log(err);
   return false;
 });
}

onEditD(dessert: Dessert) {
  this.editmenuService.selectedDessert = dessert;
}

onDeleteD(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.editmenuService.deleteDessert(_id).subscribe((res) => {
      this.resetFormD(form);
  this.refreshDessertList();

      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
// end Of meat functions



// Drink functions
resetFormDr(form?: NgForm) {
  if (form)
    form.reset();
  this.editmenuService.selectedDrink = {
    _id: "",
    drink: "",
    descriptiondr: ""
  }
}

onSubmitDr(form: NgForm) {
  if (form.value._id == "") {
    this.editmenuService.postDrink(form.value).subscribe((res) => {
      this.resetFormDr(form);
      this.refreshDrinkList();

    });
  }
  else {
    this.editmenuService.putDrink(form.value).subscribe((res) => {
      this.resetFormDr(form);
      this.refreshDrinkList();

      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}

refreshDrinkList() {
this.editmenuService.getDrink().subscribe(allmenu=> {
  this.drinks = allmenu;
},
 err => {
   console.log(err);
   return false;
 });
}

onEditDr(drink: Drink) {
  this.editmenuService.selectedDrink = drink;
}

onDeleteDr(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.editmenuService.deleteDrink(_id).subscribe((res) => {
      this.resetFormDr(form);
  this.refreshDrinkList();

    });
  }
}
// end Of meat functions


onLogoutClick() {
  this.authService.logout();
  this.flashMessage.show('You are logged out', {
    cssClass: 'alert-success', timeout: 3000
  });
  this.router.navigate(['/login']);
  return false;
}

}