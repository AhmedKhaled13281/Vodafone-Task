import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { env } from '../../enviroments/env';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export class CacheInterceptor implements HttpInterceptor {
  private cachedResponses = new Map<string, HttpResponse<any>>();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(env.JSON_PLACEHOLDER_BASE_URL)) {
      const cachedResponse = this.cachedResponses.get(req.url);
      if (cachedResponse) {
        return of(cachedResponse);
      } else {
        return next.handle(req).pipe(
          tap((event) => {
            if (event instanceof HttpResponse) {
              this.cachedResponses.set(req.url, event);
            }
          })
        );
      }
    } else {
      return next.handle(req);
    }
  }
}
