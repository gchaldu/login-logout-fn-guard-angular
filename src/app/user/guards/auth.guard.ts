import { inject } from "@angular/core"
import { AuthService } from "../service/auth.service"
import { Router } from "@angular/router";


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router)

  authService.chekAuthAdmin().subscribe(
    {
      next: (isAuth) => {
        if (isAuth) router.navigateByUrl('product')
        else router.navigateByUrl('login')
      },
      error: (e: Error) => {
        console.log(e.message)
      }
    }
  )
}
