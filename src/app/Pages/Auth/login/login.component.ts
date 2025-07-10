import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  private _loginservice = inject(LoginService)

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._loginservice.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          

          // Handle successful login, e.g., redirect to dashboard
        },
        error: (error) => {
          console.error('Login failed', error);
          // Handle login error, e.g., show an error message
        }
      })

    }
  }
}
