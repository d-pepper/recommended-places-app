import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Results } from '../models/results';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  results: object; 

  //Move string to config
  apiUrl: string = 'https://api.foursquare.com/v2/venues/explore?client_id=COIEIWNYLPY1IOI1PUNVYEY1M55GEAPG5IQQB5VW1R0XMZ1V&client_secret=JOJZ2SPCOFK3C5U5ICPXFDIEV13ITKCN2W3UYCTOWWTAT435&v=20180323&limit=15'; //including clientId and secret for demo purposes.

  constructor(private httpClient: HttpClient) { }

  getFourSquareResults(searchInput: string): Observable<object>{
    return this.httpClient.get<Object>(this.apiUrl + "&near=" + searchInput);
  }
}
