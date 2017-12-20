import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
@Injectable()
export class AuthorsService {

  get() {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    return of(['Author 1', 'Author 2', 'Author 3', 'Author 4','Author 5']).delay(1200);
  }

}
