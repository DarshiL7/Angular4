import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCarousel } from './Login/loginCarousel.component';
import { ContactComponent } from './Contact/contact.component';
import { HomeComponent } from './Home/home.component';

const App_Routes: Routes =[
    {path:'', component: LoginCarousel},
    

];

export const App_Route_Module : ModuleWithProviders = RouterModule.forRoot(App_Routes);