import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private router: Router
  constructor() { }

  ngOnInit(): void {
  }
  goToCovid19(){
    const link=['covid19'];
    this.router.navigate(link);

  }
}
