import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  results: object; 

  apiUrl: string = 'https://api.foursquare.com/v2/venues/explore?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee';

  constructor(private httpClient: HttpClient) { }

  getFourSquareResults(): Observable<object>{
    return this.httpClient.get<object>(this.apiUrl);
  }
}
