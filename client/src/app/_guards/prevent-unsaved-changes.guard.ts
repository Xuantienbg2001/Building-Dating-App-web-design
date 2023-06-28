import { ConfirmService } from './../_services/confirm.service';
import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {

  constructor(private ConfirmService: ConfirmService,) {}

  canDeactivate(
    component: MemberEditComponent)  : Observable<boolean> | boolean {
      // nó cho phép kiêm tra 1 điều kiện nhất định
      if(component.editForm?.dirty){
        return this.ConfirmService.confirm()
      }
    return true;
    //có thể hủy kích hoạt hoàn thành
    // true nó giữ nguyên biểu mẫu
    // sau đó vào rooting-modle để thêm router

    }

}
