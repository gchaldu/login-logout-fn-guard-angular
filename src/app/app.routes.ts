import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './user/guards/auth.guard';
import { preventLoggedInGuard } from './user/guards/prevent-logged-in.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'register',
    loadComponent: () => import('./user/pages/register-user-page/register-user-page.component').then(p => p.RegisterUserPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./user/pages/login-user-page/login-user-page.component').then(p => p.LoginUserPageComponent),
    canActivate: [preventLoggedInGuard]
  },
  {
    path: 'product',
    loadComponent: () => import('./product/pages/list-products-page/list-products-page.component').then(p => p.ListProductsPageComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
