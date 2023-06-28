import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  title: string;
  message: string;
  btnOkText: string;
  btnCancelText: string;
  result: boolean;

  constructor(public bsModalRef: BsModalRef){}

  ngOnInit(): void {}

  confirm(){
    this.result = true;
    this.bsModalRef.hide();
  }

  decline() {
    this.result = false;
    this.bsModalRef.hide();
  }

}
