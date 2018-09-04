import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchResultsComponent } from './location-search-results.component';

describe('LocationSearchResultsComponent', () => {
  let component: LocationSearchResultsComponent;
  let fixture: ComponentFixture<LocationSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
