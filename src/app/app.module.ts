import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './content/header/header.component';

//  owl carousel import

import {OwlModule} from 'ngx-owl-carousel';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OwlModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
