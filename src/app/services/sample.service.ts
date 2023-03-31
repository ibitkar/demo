import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  // apiUrl = "https://reqres.in/api/users"

  constructor(private httpClient: HttpClient) { }

  getData(url:any): Observable<any> {
    return this.httpClient.get(url).pipe(map(res => res))
  }

  deleteData(url:any): Observable<any> {
    return this.httpClient.delete(url).pipe(map(res => res))
  }


  postData(url:any,payload:any) {
    return this.httpClient.post(url,payload).pipe(map(res => res))
  }

}
