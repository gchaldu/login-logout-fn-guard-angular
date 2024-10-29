import { Component } from '@angular/core';
import { AuthUserComponent } from '../../components/auth-user/auth-user.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-login-user-page',
  standalone: true,
  imports: [AuthUserComponent, NavbarComponent],
  templateUrl: './login-user-page.component.html',
  styleUrl: './login-user-page.component.css'
})
export class LoginUserPageComponent {

}
