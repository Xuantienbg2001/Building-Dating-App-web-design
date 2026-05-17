import { AccountService } from '../_services/account.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  constructor(public accountService: AccountService, private router: Router) {}

  logout(){
    this.accountService.logout();
    // khi mà logout thì sẽ về trang home
    this.router.navigateByUrl('/');
  }

  // phương thức này đc sử dụng để đăng ký currentUser có thể quan sát đc của accountService
}

// k cần pt getcurrentuser nữa vì chúng tôi đang lấy nó trực tiếp
