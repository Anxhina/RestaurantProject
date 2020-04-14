import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faSlack } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public collapse= false;
  faTwitter = faTwitter;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

  

}
