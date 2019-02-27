import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-100px)', opacity: 0}),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateY(-100px)', opacity: 1 }))
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {
  products = [
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
    {url: '../../../assets/a1.png', text: 'lorem ipsum lorem ipsum'},
  ];

  isHiddenElement = false;
  constructor() { }

  ngOnInit() {
  }
  showHiddenText(){
    console.log(this.isHiddenElement);
    this.isHiddenElement = !this.isHiddenElement;
  }

}
