import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './components/slide/slide.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';




@NgModule({
  declarations: [
    SlideComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),

  ],
  exports:[
    SlideComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
