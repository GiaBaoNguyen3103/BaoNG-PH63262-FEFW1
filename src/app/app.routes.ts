import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { guestGuard } from './guards/guest-guard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products', component: Products },
  { path: 'stories', component: Stories },

  {
    path: 'add-story',
    component: AddStory,
    canActivate: [authGuard],
  },

  {
    path: 'login',
    component: Login,
    canActivate: [guestGuard],
  },
  {
    path: 'register',
    component: Register,
    canActivate: [guestGuard],
  },
];
