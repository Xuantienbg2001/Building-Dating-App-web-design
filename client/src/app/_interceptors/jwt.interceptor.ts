import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}
  // để nó khởi tạo 1 đối tượng

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser = this.accountService.getCurrentUser();
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}` // khi đã tạo ở đây rồi k cần httooption bên members
        }
      });
    }
    return next.handle(request);
  }

  // intercept đc sử dụng để can thiệp vào request gửi từ client vs các response trả về từ server
  //pipe(take(1)) nó phát giá trị user hiện tại 1 lần duy nhất khi nó đc gọi
  // httphandle xử lý request truyền vào , gửi request đó đến server và nhận lại phản hồi từ serve
}

//jwt viết tắt json web token .đây là tiêu chuẩn mở đc sử dụng truyên thông tin giữa các bên dưới dạng 1 chuỗi json.jwt

///đưa dịch vụ tài khoản của mình vào đây
