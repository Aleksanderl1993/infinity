import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    // mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
    mySlideImages = ['../../assets/a1.png'];
    myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    mySlideOptions = {items: 1, dots: true, nav: true};
    myCarouselOptions = {items: 3, dots: true, nav: true};

    constructor() {
        console.log(this.mySlideImages);
        console.log(this.myCarouselImages);
        console.log(this.mySlideOptions);
        console.log(this.myCarouselOptions);
    }

    ngOnInit() {
    }

}
