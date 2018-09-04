import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  searchInputFromParent: string;
  searchInput: string;

  constructor() { }

  ngOnInit() {
  }

  doSearch(){
    this.searchInputFromParent = this.searchInput;
  }
}
