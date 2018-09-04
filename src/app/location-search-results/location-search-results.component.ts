import { Component, OnInit } from '@angular/core';
import { LocationSearchService } from '../services/location-search.service'

@Component({
  selector: 'app-location-search-results',
  templateUrl: './location-search-results.component.html',
  styleUrls: ['./location-search-results.component.css']
})
export class LocationSearchResultsComponent implements OnInit {

  results: object;

  constructor(public locationSearchService: LocationSearchService) { }

  ngOnInit() {
    this.getResults();
  }

  getResults(): void {
    this.locationSearchService.getFourSquareResults()
      .subscribe(results => this.results = results);
  }

}
