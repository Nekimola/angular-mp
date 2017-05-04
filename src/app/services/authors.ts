import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { ApiService } from "./api";

@Injectable()
export class AuthorsService {
  apiUrl = 'https://angular-mp.now.sh';

  constructor (private http: ApiService) {}

  load (): Observable<Response> {
    return this.http.get(`${this.apiUrl}/authors`);
  }
}