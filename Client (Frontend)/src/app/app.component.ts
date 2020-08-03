import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { ILocation } from './location';
import { appProperties } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = appProperties.TITLE;
  heading = appProperties.HEADING;
  locations: ILocation[] = []; /* Array of Location objects to maintain list of locations */
  searchedlocations: ILocation[] = [];  /* Array of searched Location objects for specific UUID */
  uuid: String = "";
  resultStrings: String[] = []; /* String array of searched Location objects for specific UUID to display in HTML */

  constructor(private locationService: LocationService) { }

  /**
   * Service Call is made to retrieve list of all locations, as soon as the app component is initialised.
   */
  ngOnInit(): void {
    this.locationService.getLocationsList().subscribe((res) => {
      if (res) {
        this.locations = res;
      }
    });
  }

  /**
   * method retrives the location records for user entered UUID and process records to display.
   */
  searchLocation() {
    this.resultStrings.length = 0;
    if (this.uuid != "") {
      this.locationService.getLocationByUuid(this.uuid).subscribe((res) => {
        if (res) this.searchedlocations = res;
        for (var i = 0; i < this.searchedlocations.length; i++) {
          var temp = this.searchedlocations[i].name + ", " + this.searchedlocations[i].address + ", Latitude = " + this.searchedlocations[i].latitude + ", Longitude = " + this.searchedlocations[i].longitude + "\n";
          this.resultStrings.push(temp);
        }
        if (this.resultStrings.length == 0) this.resultStrings.push(appProperties.NO_LOCATION_FOUND)
      });
    } else {
      this.resultStrings.push(appProperties.ENTER_UUID);
    }
  }
}

