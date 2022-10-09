import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LandingPageComponent } from './views/landing-page.component';
import { landingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListNewsComponent } from './list-news/list-news.component';
import { MaisLidasComponent } from './mais-lidas/mais-lidas.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeadingComponent,
    FooterComponent,
    ContentComponent,
    ListNewsComponent,
    MaisLidasComponent,
  ],
  imports: [
    CommonModule,
    landingPageRoutingModule,
    SharedModule,
  ],
  exports: [
    LandingPageComponent,
    ContentComponent,
  ]
})
export class LandingPageModule { }
