import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resgister',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './resgister.component.html',
  styleUrl: './resgister.component.scss'
})
export class ResgisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      const payload = { ...formValue, role: 'user' };
      console.log(payload); // Replace with your API call
    }
  }
}
