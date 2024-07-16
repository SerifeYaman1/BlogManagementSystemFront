import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { EditorComponent } from './components/editor/editor.component';

export const routes: Routes = [
    {path:"",redirectTo:"/editor",pathMatch:'full'},
    {
        path:"home",
        component:HomePageComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"editor",
        component:EditorComponent
    },
    // {
    //     path:"login",
    //     component:LoginComponent
    // }
];
