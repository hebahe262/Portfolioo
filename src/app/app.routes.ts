import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
     {path:"", redirectTo:"HOME", pathMatch:"full"},
    {path:"HOME",component:HomeComponent, title:"HOME"},
    {path:"ABOUT",component:AboutComponent, title:"ABOUT"},
     
     
      
];
