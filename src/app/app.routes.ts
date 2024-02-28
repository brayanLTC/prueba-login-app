import { Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    {
      path: 'home',
      component: HomeComponent,
      ...canActivate(() => redirectUnauthorizedTo(['/login']))
    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
  ];