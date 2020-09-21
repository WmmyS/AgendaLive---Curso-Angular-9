import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'aplication/jason'
    })
  };

  constructor(
    private httpClient : HttpClient
  ) { }

  public getLivesWithFlag(flag: string) : Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  }
}
