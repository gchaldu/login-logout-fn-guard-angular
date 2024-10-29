import { Component, inject } from '@angular/core';
import { AuthService } from '../../user/service/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  authService = inject(AuthService);
  router = inject(Router)

  onLogin() {
    this.router.navigate(['login']);
  }

  onLogout() {
    this.authService.logout()
    this.router.navigate(['login']);
  }

  get user() {
    return this.authService.currentUser
  }
}
