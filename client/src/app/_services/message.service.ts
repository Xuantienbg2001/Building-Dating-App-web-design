import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { environment } from 'src/environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { Message } from '../_models/message';
import { User } from '../_models/user';
import { BehaviorSubject, pipe, take } from 'rxjs';
import { Group } from '../_models/group';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  hubUrl = environment.hubUrl;
  private hubConnection : HubConnection;
  private messageThreadSource = new BehaviorSubject<Message[]>([]);
  messageThread$ = this.messageThreadSource.asObservable();

  constructor( private http: HttpClient) {

  }

  createHubConnection(user : User, otherUsername :string) {
      this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'message?user=' + otherUsername, {
            accessTokenFactory : () => user.token
      })
       .withAutomaticReconnect()
       .build()

       this.hubConnection.start().catch(error => console.log(error));

       this.hubConnection.on('ReceiveMessageThread', messages => {
          this.messageThreadSource.next(messages);
       } )

       this.hubConnection.on('NewMessage', message => {
        this.messageThread$.pipe(take(1)).subscribe(messages => {
            this.messageThreadSource.next([...messages, message]);
        })
      })

      this.hubConnection.on('UpdateGroup', (group: Group) =>{
          if (group.connections.some(x => x.username === otherUsername)) {
            this.messageThread$.pipe(take(1)).subscribe(messages => {
              messages.forEach(message => {
                if (!message.dataRead) {
                   message.dataRead = new Date(Date.now())
                }
              })
              this.messageThreadSource.next([...messages]);
            })
          }
      })
  }


      stopHubConnection() {
        if (this.hubConnection){
          this.hubConnection.stop();
        }
      }

  getMessages(pageNumber: number , pageSize: number, container: string){
    let params = getPaginationHeaders(pageNumber, pageSize);
    //tạo biến params để luuw trữ các tham số phân trang
    params = params.append('Container', container);

    return getPaginatedResult<Message[]>(this.baseUrl +'messages',params, this.http);
    // ham này sẽ tạo đối tượng PaginatedResult để lưu trữ kết quả phân trang , sau đó sử dụng pth gét trên đối tượng httpclinet
    //để gọi api
  }
  // tạo hàm cuộc hội thoại giữa ng nhận và người gửi

  getMessageThread(username : string ){
    return this.http.get<Message[]>(this.baseUrl + 'messages/thread/'+ username )
  }

  //tao phwuong thức  gửi tin nhăn s
  async sendMessage( username : string , content :string ) {
    return this.hubConnection.invoke('SendMessage', {recipientUsername: username, content})
       .catch(error => console.log(error));
  }

  deleteMessage(id: number)
  {
     return this.http.delete(this.baseUrl + 'messages/'+ id)
  }


}


