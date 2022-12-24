import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './views/noticias.component';
import { NoticiasRoutingModule } from './noticias-routing.module';



@NgModule({
  declarations: [
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ],
   exports:[
    NoticiasComponent
  ]
})
export class NoticiasModule { }
