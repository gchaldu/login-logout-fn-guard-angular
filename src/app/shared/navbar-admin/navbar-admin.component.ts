import { Component, inject } from '@angular/core';
import { AuthService } from '../../user/service/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css'
})
export class NavbarAdminComponent {
  authService = inject(AuthService);
  router = inject(Router)

  onLogout() {
    this.authService.logout()
    this.router.navigate(['login']);
  }

  get user() {
    return this.authService.currentUser
  }
}
