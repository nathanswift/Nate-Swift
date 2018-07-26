import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  adj = '';
  adjs = ['Creative', 'Custom', 'Unique', 'Expressive'];
  currentAdj = 0;

  verb = '';
  verbs = ['Design','Develop', 'Create', 'Produce'];
  currentVerb = 0;

  noun = '';
  nouns = ['Webpages', 'Projects', 'Experiences', 'Art'];
  currentNoun = 0;


  constructor() {
    this.setWords();
    setInterval(() => {
      this.currentAdj++;
      this.currentVerb++;
      this.currentNoun++;
      if (this.currentAdj === this.adjs.length) this.currentAdj = 0;
      if (this.currentVerb === this.verbs.length) this.currentVerb = 0;
      if (this.currentNoun === this.nouns.length) this.currentNoun = 0;
      this.setWords();
    }, 2000);
  }

  setWords() {
    this.verb = this.verbs[this.currentVerb];
    this.adj = this.adjs[this.currentAdj];
    this.noun = this.nouns[this.currentNoun];
  }

  ngOnInit() {
  }

}
