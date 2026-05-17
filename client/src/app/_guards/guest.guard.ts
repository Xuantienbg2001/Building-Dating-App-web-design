import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

export const guestGuard: CanActivateFn = () => {
  const accountService = inject(AccountService);
  const router = inject(Router);

  return accountService.currentUser$.pipe(
    map((user) => {
      if (!user) return true;
      return router.createUrlTree(['/members']);
    })
  );
};
