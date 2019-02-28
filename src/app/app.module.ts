import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './content/header/header.component';

//  owl carousel import

import {OwlModule} from 'ngx-owl-carousel';
import { MissionComponent } from './content/mission/mission.component';
import { ClientsComponent } from './content/clients/clients.component';
import { ProductsComponent } from './content/products/products.component';
import { MapComponent } from './content/map/map.component';
import { ContactComponent } from './content/contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MissionComponent,
        ClientsComponent,
        ProductsComponent,
        MapComponent,
        ContactComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        OwlModule
    ],
    providers: [
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
