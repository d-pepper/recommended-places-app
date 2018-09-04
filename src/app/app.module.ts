import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { LocationSearchResultsComponent } from './location-search-results/location-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    LocationSearchResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
