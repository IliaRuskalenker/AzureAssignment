import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userName: string = '';
  constructor() {
    this.userName = history.state.data.name;
  }

  ngOnInit(): void {
  }

}
