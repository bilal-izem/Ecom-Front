import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnfantItem } from '../entity/enfant.model';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  private apiUrl = 'http://localhost:3000/enfants';

  constructor(private http: HttpClient) {}

  getEnfants(): Observable<EnfantItem[]> {
    return this.http.get<EnfantItem[]>(this.apiUrl);
  }

}
