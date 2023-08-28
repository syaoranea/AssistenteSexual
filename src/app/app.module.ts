import { APP_BASE_HREF } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './modulo/landing-page/views/landing-page.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadingComponent } from './modulo/landing-page/componentes/heading/heading.component';
import { ContentComponent } from './modulo/landing-page/componentes/content/content.component';
import { ListNewsComponent } from './modulo/landing-page/componentes/list-news/list-news.component';
import { MaisLidasComponent } from './modulo/landing-page/componentes/mais-lidas/mais-lidas.component';
import { FooterComponent } from './modulo/landing-page/componentes/footer/footer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticiasComponent } from './modulo/noticias/views/noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeadingComponent,
    ContentComponent,
    ListNewsComponent,
    MaisLidasComponent,
    FooterComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,

  ],
 
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
