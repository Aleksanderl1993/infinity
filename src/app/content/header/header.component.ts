import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    constructor (private cookie: CookieService) {

    }

    cookieInfo = true;

    ngOnInit() {
        console.log(this.cookie.get('cookie'));
        if (this.cookie.get('cookie')) {
            this.cookieInfo = false;
        }
        // console.log(this.cookie.getAll());
    }

    setCookie() {
        console.log('cookiies');
        this.cookieInfo = false;

        this.cookie.set('cookie',  'Udzielono zgodę na przechowywanie plików cookies.');

        alert('Zaakceptowałeś politykę cookies');

    }

}
