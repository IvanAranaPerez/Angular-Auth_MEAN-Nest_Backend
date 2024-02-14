import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url = state.url;
  // localStorage.setItem('url', url);

  const authServie = inject( AuthService );
  const router = inject(Router);

  if ( authServie.authStatus() === AuthStatus.authenticated) {
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;

};
