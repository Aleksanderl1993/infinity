import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
/*  animations: [
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
  ]*/
})
export class ProductsComponent implements OnInit {
  products = [
    {url: '../../../assets/a1.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a1w.png'},
    {url: '../../../assets/a2.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a2w.png'},
    {url: '../../../assets/a3.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a3w.png'},
    {url: '../../../assets/a4.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a4w.png'},
    {url: '../../../assets/b1.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b1w.png'},
    {url: '../../../assets/b2.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b2w.png'},
    {url: '../../../assets/b3.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b3w.png'},
    {url: '../../../assets/b4.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b4w.png'},
    {url: '../../../assets/c1.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c1w.png'},
    {url: '../../../assets/c2.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c2w.png'},
    {url: '../../../assets/c3.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c3w.png'},
    {url: '../../../assets/c4.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c4w.png'},
  ];

  isHiddenElement = false;
  constructor() { }

  ngOnInit() {
  }
/*  showHiddenText(){
    console.log(this.isHiddenElement);
    this.isHiddenElement = !this.isHiddenElement;
  }*/

}
