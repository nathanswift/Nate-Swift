import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  jumpToSection(id) {
    const elem = document.getElementById(id);
    window.scrollTo(0, elem.offsetTop); //(x,y) 
  }

  ngOnInit() {
  }

}
