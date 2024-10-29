

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const preventLoggedInGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (localStorage.getItem('token')) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
