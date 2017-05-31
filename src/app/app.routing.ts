import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCarousel } from './Login/loginCarousel.component';
import { ContactComponent } from './Contact/contact.component';
import { HomeComponent } from './Home/home.component';

const appRoutes: Routes =[
    {path:'/', component: LoginCarousel},
    {}

];

export const appRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes);