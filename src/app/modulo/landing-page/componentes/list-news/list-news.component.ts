import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  totalItems = 64;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  constructor() { }

  ngOnInit(): void {
  }

}
