import { Component, OnChanges, Input } from '@angular/core';
import { LocationSearchService } from '../services/location-search.service'
//import { Results } from '../models/results';

@Component({
  selector: 'app-location-search-results',
  templateUrl: './location-search-results.component.html',
  styleUrls: ['./location-search-results.component.css']
})
export class LocationSearchResultsComponent implements OnChanges {

  @Input() searchInput: string;
  results: object;

  constructor(public locationSearchService: LocationSearchService) { }

  ngOnChanges(){
    this.getResults();
  }
  
  getResults(): void {
    this.locationSearchService.getFourSquareResults(this.searchInput)
      .subscribe(results => this.results = results);
  }

}
