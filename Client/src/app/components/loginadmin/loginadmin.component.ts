import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const admin = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateAdmin(admin).subscribe(data => {
      if(data.success){
        this.authService.storeAdminData(data.token, data.admin);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 200});
        this.router.navigate(['admin']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 3000});
        this.router.navigate(['login']);
      }
    });
  }
}


