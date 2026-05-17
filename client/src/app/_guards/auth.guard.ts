import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

export const authGuard: CanActivateFn = (_route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);
  const toastr = inject(ToastrService);
  const user = accountService.getCurrentUser();

  if (user) return true;

  toastr.error('You shall not pass!');
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  });
};
