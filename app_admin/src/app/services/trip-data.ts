import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})

export class TripData {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) {}
  
    baseurl = 'http://localhost:3000/api/trips';

    // Call to our /login endpoint, returns JWT
login(user: User, passwd: string) : Observable<AuthResponse> {
// console.log('Inside TripDataService::login');
return this.handleAuthAPICall('login', user, passwd);
}
// Call to our /register endpoint, creates user and returns JWT
register(user: User, passwd: string) : Observable<AuthResponse> {
// console.log('Inside TripDataService::register');
return this.handleAuthAPICall('register', user, passwd);
}
// helper method to process both login and register methods
handleAuthAPICall(endpoint: string, user: User, passwd: string) :
Observable<AuthResponse> {
// console.log('Inside TripDataService::handleAuthAPICall');
let formData = {
name: user.name,
email: user.email,
password: passwd
};
return this.http.post<AuthResponse>(this.baseurl + '/' + endpoint,
formData);
}

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseurl);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.baseurl, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseurl + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.baseurl + '/' + formData.code, formData);
  }
}
