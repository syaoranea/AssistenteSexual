import { Component, OnInit } from '@angular/core';
import { Noticia } from '../interfaces/noticia.interface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  new: Noticia = {
    id: 1,
    title: 'Notícia 1',
    subtitle: 'Subtitulo 1',
    imageURL: 'https://picsum.photos/200/300',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }
  constructor() { }

  ngOnInit(): void {
    this.new = {
      id: 1,
      title: 'Notícia 1',
      subtitle: 'Subtitulo 1',
      imageURL: 'https://picsum.photos/200/300',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    }
  }

}
