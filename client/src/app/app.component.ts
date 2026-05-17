import { PresenceService } from './_services/presence.service';
import { AccountService } from './_services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users : any;

  constructor(private accountService: AccountService, private presence: PresenceService) {}
  //truyền

  ngOnInit() {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => {
        if (user) {
          this.presence.createHubConnection(user);
        }
      });
  }
}
