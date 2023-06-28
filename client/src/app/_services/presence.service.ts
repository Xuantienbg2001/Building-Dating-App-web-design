import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/enviroment';
import { Injectable } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';
import { User } from '../_models/user';
import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
import { BehaviorSubject, take } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  // lấy đường dẫn
  hubUrl= environment.hubUrl;
  private hubConnection : HubConnection;
  private onlineUsersSource = new BehaviorSubject<string[]>([]);
  onlineUsers$ = this.onlineUsersSource.asObservable();


  constructor(private toastr: ToastrService, private router : Router) { }
// chúng tôi cần gửi mã thông báo ng dùng, nên cta sẽ truyền đối tượng user vào
// cta sẽ thiết lập kết nối và nhận thông tin giữa máy khách và máy chủ
// thông qua đó bảo đảm tính năng hiện thị sự có mặt của ng dùng trên ứng dụng web

  createHubConnection(user: User){
    //tham số truyền vào chưa thông tin ng dùng , bao gồm 1 token đc xử dụng để xác thực ng dùng
    this.hubConnection = new HubConnectionBuilder()
    .withUrl(this.hubUrl + 'presence',{
      accessTokenFactory: () =>user.token
      // cung cáp access token để xác thực ng dùng khi kết nối
    })
    .withAutomaticReconnect()
    //tự động kết nối lại khi mất kết nối vơi server
    .build();
    // xấy dựng kết nối sau đó bắt đầu

    this.hubConnection
        .start()
        //start đc gọi là kết nối bắt đầu
        .catch(error=> console.log(error)
         )
         // catch sử lý lỗi ngoại lệ
    this.hubConnection.on('UserIsOnline',username =>{
      this.onlineUsers$.pipe(take(1)).subscribe(usernames => {
        this.onlineUsersSource.next([...usernames,username]);
      })
    })
    // cuối cùng lắng nghe sự kiện user is online từ server và hiện thị thông báo toastr
    this.hubConnection.on("UserIsOffline",username =>{
      this.onlineUsers$.pipe(take(1)).subscribe(usernames => {
        this.onlineUsersSource.next([...usernames.filter(x => x !== username)]);
      })
    })

    this.hubConnection.on('GetOnlineUsers',(usernames : string []) => {
       this.onlineUsersSource.next(usernames)
    })

    this.hubConnection.on('NewMessageReceived', ({username, knowAs}) =>{
          this.toastr.info(knowAs + 'has sent you a new message!')
          .onTap
          .pipe(take(1))
          .subscribe(() => this.router.navigateByUrl('/members/' + username + '?tab=3'));
    })

    // Note : userisonline và userisoffline phải đúng với cấu hình ban đầu mình đã định dạng ở presenhub
    // tạo pth dừng kết nối
  }

  stopHubConnection(){
    this.hubConnection.stop().catch(error => console.log(error))
  }

}
