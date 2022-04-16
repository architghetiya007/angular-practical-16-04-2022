import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private router:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
     let token = localStorage.getItem('token');
    //  return new Observable( (observer:any) => {
    //   observer.next()

    // }
    if(token) {
     return new Observable( (observer:any) => {
        observer.next()
        return;
     })
    }
    else {
      this.router.navigate(['/login'])
    }
  }
  
}
