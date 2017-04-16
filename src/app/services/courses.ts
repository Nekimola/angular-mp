import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { Http, Response } from "@angular/http";

@Injectable()
export class CoursesService {
  apiUrl = 'https://angular-mp.now.sh';

  constructor (private http: Http) {}

  load (): Observable<Response> {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  remove (id: string) {
    return of({})
      .delay(500);
  }
}