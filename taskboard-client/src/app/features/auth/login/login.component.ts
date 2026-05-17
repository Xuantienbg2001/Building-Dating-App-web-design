import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  error = '';
  form = this.fb.group({
    userNameOrEmail: ['', Validators.required],
    password: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) return;
    const { userNameOrEmail, password } = this.form.getRawValue();
    this.auth.login(userNameOrEmail!, password!).subscribe({
      next: () => this.router.navigateByUrl('/boards'),
      error: (err) => (this.error = err),
    });
  }
}
