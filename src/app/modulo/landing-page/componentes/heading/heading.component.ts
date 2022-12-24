import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit(): void {
  }

  goToCuidadores(){
    console.log('entrou2');
    this.stateService.go('noticias', {}, {location: false});
  }

}
