import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {

  constructor(public http: HttpClient) { }
  getRicknMorty(): Observable<any> {
    const url = 'https://rickandmortyapi.com/api/character'
    return this.http.get<any>(url); //.pipe(delay(2000))
  }

}
