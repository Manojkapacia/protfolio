import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navTabeData:any;
  constructor() { }

  ngOnInit(): void {
  }
  hitAnchor1(event: any){
      this.navTabeData = event;
      return;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left customOption" aria-hidden="true"></i>', 
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 1
      },
      550: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 400,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

}
