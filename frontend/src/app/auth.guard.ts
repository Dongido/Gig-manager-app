import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    return this.authService.isloggedIn
        .pipe(
            take(1),
            map((isLoggedIn: boolean) => {
                if(!isLoggedIn){
                    this.router.navigate(['/login'])
                    return false;
                }
                return true;
            })
        )
    }
}