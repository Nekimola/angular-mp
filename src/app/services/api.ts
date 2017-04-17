import {Injectable} from '@angular/core';
import {
  Http,
  XHRBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http';
import { Observable } from "rxjs";

const getToken = () => {
  const auth = localStorage.getItem('auth');
  let token = '';

  try {
    token = JSON.parse(auth).user.token
  } catch (e) {}

  return token;
};

@Injectable()
export class ApiService extends Http {

  constructor (backend: XHRBackend, options: RequestOptions) {
    const token = getToken();

    options.headers.set('Authorization', `${token}`);
    super(backend, options);
  }

  request (url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const token = getToken();

    // meaning we have to add the token to the options, not in url
    if (typeof url === 'string') {
      if (!options) {
        // let's make option object
        options = { headers: new Headers() };
      }
      options.headers.set('Authorization', `${token}`);
    } else {
      // we have to add the token to the url object
      url.headers.set('Authorization', `${token}`);
    }

    return super.request(url, options);
  }
}