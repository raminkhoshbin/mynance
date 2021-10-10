import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4100/'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  get(): Observable<any>{

    let headers = new HttpHeaders()
    headers.append('Content-type', 'application/json')
    
    return this.http.get(baseUrl + 'dashboard/', { headers: headers }).pipe(
      map((res : any) => {
        return res
      }),
      catchError((err, caught) => {
        console.error(err)
        throw err
      })
    )

  }

}