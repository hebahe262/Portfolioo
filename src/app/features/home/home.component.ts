import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//  customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: false,
//     touchDrag: false,
//     pullDrag: false,
//     dots: false,
//     navSpeed: 700,
//     navText: ['', ''],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: true
//   }

 

customOptions = {
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 1500,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 3
    },
    640: {
      items: 5
    },
    1024: {
      items: 7
    }
  }
};


}
