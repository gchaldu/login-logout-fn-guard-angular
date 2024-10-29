import { Component } from '@angular/core';
import { RegisterUserComponent } from '../../components/register-user/register-user.component';

@Component({
  selector: 'app-register-user-page',
  standalone: true,
  imports: [RegisterUserComponent],
  templateUrl: './register-user-page.component.html',
  styleUrl: './register-user-page.component.css'
})
export class RegisterUserPageComponent {

}
