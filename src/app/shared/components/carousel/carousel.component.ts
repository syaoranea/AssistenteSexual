import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [
    { image: 'https://s2-ge.glbimg.com/b6I02QQpGzH7ERXUnoXIJtGB06g=/0x0:1280x1165/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/J/r/4KwB9BTze0BHWHM7RG4Q/whatsapp-image-2023-08-28-at-14.20.54.jpeg' },
    { image: 'https://s2-ge.glbimg.com/b6I02QQpGzH7ERXUnoXIJtGB06g=/0x0:1280x1165/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/J/r/4KwB9BTze0BHWHM7RG4Q/whatsapp-image-2023-08-28-at-14.20.54.jpeg' },
    { image: 'https://s2-ge.glbimg.com/b6I02QQpGzH7ERXUnoXIJtGB06g=/0x0:1280x1165/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/J/r/4KwB9BTze0BHWHM7RG4Q/whatsapp-image-2023-08-28-at-14.20.54.jpeg' },
    // Adicione mais imagens conforme necessário
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
