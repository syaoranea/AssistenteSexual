import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LandingPageComponent } from './views/landing-page.component';
import { landingPageRoutingModule } from './landing-page-routing.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeadingComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    landingPageRoutingModule,
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
