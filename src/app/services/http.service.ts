import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
const API_URL = 'https://dummy.restapiexample.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  getData(): Observable<any> {
    // return this.httpClient.get(API_URL + Url);

    return this.httpClient.get('https://reqres.in/api/users').pipe(map(res => res));

  }

  postData(Url: any, payload: any): Observable<any> {
    return this.httpClient.post(API_URL + Url, payload);

    // return this.httpClient.post('https://reqres.in/api/users');

  }
}
