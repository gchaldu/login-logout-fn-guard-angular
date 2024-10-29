import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { User } from '../../interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-user.component.html',
  styleUrl: './auth-user.component.css'
})
export class AuthUserComponent {

  router = inject(Router)

  fb = inject(FormBuilder)
  formulario: FormGroup = this.fb.nonNullable.group(
    {
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required, Validators.minLength(3)]
    }
  )

  authService = inject(AuthService)

  onlogin() {
    this.authService.login('gchaldu', '123').subscribe(
      {
        next: (user: User) => {
          console.log(user)
          this.router.navigateByUrl('product')
        },
        error: (e: Error) => {
          console.log(e.message)
        }
      }
    )
  }


}
