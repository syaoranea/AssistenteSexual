import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { landingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeadingComponent } from './componentes/heading/heading.component';
import { ContentComponent } from './componentes/content/content.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListNewsComponent } from './componentes/list-news/list-news.component';
import { MaisLidasComponent } from './componentes/mais-lidas/mais-lidas.component';



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
