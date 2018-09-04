import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../services/api-caller.service'

@Component({
  selector: 'app-location-search-results',
  templateUrl: './location-search-results.component.html',
  styleUrls: ['./location-search-results.component.css']
})
export class LocationSearchResultsComponent implements OnInit {

  results: object;

  constructor(public apiCallerService: ApiCallerService) { }

  ngOnInit() {
    this.getResults();
  }

  getResults(): void {
    this.apiCallerService.getFourSquareResults()
      .subscribe(results => this.results = results);
  }

}
