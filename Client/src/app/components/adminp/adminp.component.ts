import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Admin } from 'src/app/services/menumodel';

@Component({
  selector: 'app-adminp',
  templateUrl: './adminp.component.html',
  styleUrls: ['./adminp.component.css']
})
export class AdminpComponent implements OnInit {
  user:any;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(){
    this.authService.getAdmin().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });
  }

  onEdit(admin: Admin) {
    this.authService.selectedAdmin = admin;
  }
  }

