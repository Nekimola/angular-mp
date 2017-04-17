import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { Http, Response, URLSearchParams } from "@angular/http";

@Injectable()
export class CoursesService {
  apiUrl = 'https://angular-mp.now.sh';

  constructor (private http: Http) {}

  load (payload: any): Observable<Response> {
    const params = new URLSearchParams();

    params.set('start', payload.start);
    params.set('count', payload.count);
    params.set('query', payload.query);

    return this.http.get(`${this.apiUrl}/courses`, {search: params});
  }

  remove (id: string) {
    return of({}).delay(500);
  }
}