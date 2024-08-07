import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from './place.model';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpCLient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlace('http://localhost:3000/places', 'Something wrong avai');
  }

  loadUserPlaces() {
    return this.fetchPlace('http://localhost:3000/user-places', 'Something wrong favor');

  }

  addPlaceToUserPlaces(placeId: string) {
    return this.httpCLient
    .put('http://localhost:3000/user-places', {
      placeId
    })
  }

  removeUserPlace(place: Place) {}

  private fetchPlace(url: string, erroMessage: string) {
    return this.httpCLient.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(erroMessage));
      })
    );
  }
}
