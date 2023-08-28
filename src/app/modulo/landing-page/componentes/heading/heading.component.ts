import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    console.log('toggleMenu');
    this.isMenuOpen = !this.isMenuOpen;
  }

}
