import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  adj = 'Creative';
  adjs = ['Creative', 'Custom', 'Unique', 'Awesome'];
  currentAdj = 0;

  constructor() {
    setInterval(() => {
      this.currentAdj++;
      if (this.currentAdj === this.adjs.length) {
        this.currentAdj = 0;
      }
      this.adj = this.adjs[this.currentAdj];
    }, 2000);
  }

  ngOnInit() {
  }

}
