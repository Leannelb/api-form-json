import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient) {}

  private createAuthorizationHeader():HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('sitereference', 'c12376d7-8ab2-11e8-b61d-00259047317d'); 
    //test
    // dac884ba-a59d-11e8-a9d2-00259047317d - SLM
    // c12376d7-8ab2-11e8-b61d-00259047317d - Villa
    return headers;
  }

  public get<T>(url):Observable<T> {
    let headers = this.createAuthorizationHeader();
    return this.http.get<T>(url, {
      headers: headers
    });
  }

  public post<T>(url, data):Observable<T> {
    let headers = this.createAuthorizationHeader();
    return this.http.post<T>(url, data, {
      headers: headers
    });
  }

}