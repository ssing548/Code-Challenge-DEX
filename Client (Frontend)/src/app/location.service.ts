/**
 * This service makes API calls to retrieve locations data from backend services.
 */
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  /*API call to fetch all locations from database*/
  getLocationsList(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>('/location');
  }

   /*API call to fetch location record for specific uuid from database*/
   getLocationByUuid(uuid:any): Observable<ILocation[]> {
    return this.http.get<ILocation[]>('/location/'+uuid);
  }
}
