import { AccountService } from 'src/app/_services/account.service';
import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Directive({
  selector: '[appHasRole]' // những trang chỉ thi

})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole : string[];
  // input tuwcslaf đc sử dụng là thuộc tính đầu vào, giá trị của nó có thể truyền từ cha sang thằng con
  user: User | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService
  ) {
    this.user = this.accountService.getCurrentUser();
  }
  ngOnInit(): void {
    //clear view if no roles
    if(!this.user?.roles || this.user==null)
    {
      this.viewContainerRef.clear();
      // nếu ng dùng k có role hoặc k có user thì se xẩn view bằng cách clear view4
      return;

    }
    if(this.user?.roles.some(r => this.appHasRole.includes(r)))
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef)

    }else{
      this.viewContainerRef.clear();
    }
    // nếu ng dùng có roles thì sẽ sử dụng hàm array.some để ktra ng dùng có vai tro nào trong danh sách

    // hàm some nó đc thể hiện trong callback function nó đc gọi lại trên từng thành phần trong vai trò của ng dùng

  }






}
