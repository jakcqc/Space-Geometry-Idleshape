import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-idle-main',
  templateUrl: './idle-main.component.html',
  styleUrls: ['./idle-main.component.scss'],
})
export class IdleMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  route(){
    this.router.navigate([""]);
  }
}
