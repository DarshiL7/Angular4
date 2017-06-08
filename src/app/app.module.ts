import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { App_Route_Module } from './app.routes';
import { LoginCarousel } from './Login/loginCarousel.component';
import { LoginAutorization } from './Login/login.component';

@NgModule({
    imports: [NgbModule.forRoot(), BrowserModule, App_Route_Module],
    declarations: [AppComponent, LoginCarousel, LoginAutorization],
    bootstrap: [AppComponent]
})

export class AppModule{
    
}
