import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggingService } from '../shared/logging.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router, private log: LoggingService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const idParam = next.paramMap.get('id');
    const id = Number(idParam);
    if (isNaN(id) || id < 1) {
      this.log.warning('Invalid product id', idParam, id);
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
