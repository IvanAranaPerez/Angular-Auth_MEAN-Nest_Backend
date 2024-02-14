import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url = state.url;
  // localStorage.setItem('url', url);

  const authServie = inject( AuthService );
  const router = inject(Router);

  if ( authServie.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  // if ( authServie.authStatus() === AuthStatus.checking ){
  //   return false;
  // }

  router.navigateByUrl('/auth/login');

  return false;
};
