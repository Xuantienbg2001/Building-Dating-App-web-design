import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

export const adminGuard: CanActivateFn = () => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);
  const user = accountService.getCurrentUser();

  if (
    user &&
    (user.roles.includes('Admin') || user.roles.includes('Moderator'))
  ) {
    return true;
  }

  toastr.error('You cannot enter this area');
  return false;
};
