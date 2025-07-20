import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ContactComponent } from './features/contact/contact.component';
import { ProjectsComponent } from './features/projects/projects.component';

export const routes: Routes = [
     {path:"", redirectTo:"HOME", pathMatch:"full"},
    {path:"HOME",component:HomeComponent, title:"HOME"},
    {path:"ABOUT",component:AboutComponent, title:"ABOUT"},
    {path:"Projects",component:ProjectsComponent, title:"Projects"},
    {path:"Services",component:ServicesComponent, title:"Services"},
    {path:"Contact",component:ContactComponent, title:"Contact"},
    
   
     
     
      
];
