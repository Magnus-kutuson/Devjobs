import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private jsonURL = '../data.json';

  constructor(private http: HttpClient) { }

  public getJobs(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
