import { APP_BASE_HREF } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageModule } from './modulo/landing-page/landing-page.module';
import { NoticiasModule } from './modulo/noticias/noticias.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    AppRoutingModule,
    NoticiasModule
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
