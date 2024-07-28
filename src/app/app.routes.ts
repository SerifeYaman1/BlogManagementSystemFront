import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { EditorComponent } from './components/editor/editor.component';
import { loginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { MyAccountPageComponent } from './components/my-account-page/my-account-page.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

export const routes: Routes = [
    {path:"",redirectTo:"editor",pathMatch:'full'},
    {
        path:"home",
        component:HomePageComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"editor",
        component:EditorComponent
    },
    {
        path:"my-account",
        component:MyAccountPageComponent,
        canActivate:[loginGuard]
    },
    {
        path:"admin-panel",
        component:AdminPanelComponent,
        canActivate:[loginGuard]
    },

    // {
    //     path:"login",
    //     component:LoginComponent
    // }
];
