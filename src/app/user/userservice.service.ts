import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import {tap} from 'rxjs/internal/operators';
@Injectable()
  export class userService {

    constructor(private http: HttpClient) { }

    LoadData(): Observable<any> {
      return this.http.get('https://reqres.in/api/users').pipe(
		tap(
			(data) => {},
			(error) => {}
		)
	  );
    }
 userDetails(id): Observable<any> {
      return this.http.get(`https://reqres.in/api/users/${id}`).pipe(
		tap(
			(data) => {},
			(error) => {}
		)
	  );
    }

  }