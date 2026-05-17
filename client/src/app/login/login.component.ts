import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  returnUrl = '/members';
  validationErrors: string[] = [];

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'] || '/members';
    });
  }

  login(): void {
    if (!this.loginForm.valid) return;

    this.accountService.login(this.loginForm.value).subscribe({
      next: () => {
        this.toastr.success('Đăng nhập thành công');
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (error) => {
        this.validationErrors = error;
      },
    });
  }
}
