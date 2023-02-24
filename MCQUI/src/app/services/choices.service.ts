import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Choice } from '../models/choice.model';
import { catchError } from 'rxjs/operators';
import { Component } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {

  baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  getAllChoices(): Observable<Choice[]> {
    return this.http.get<Choice[]>(this.baseApiUrl + '/api/Mcq/');
  }

  getChoices(id: string): Observable<Choice> {
    return this.http.get<Choice>(this.baseApiUrl + '/api/Mcq/' + id);
  }

  addChoicess(addChoicesRequest: Choice): Observable<Choice[]> {
    addChoicesRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Choice[]>(this.baseApiUrl + '/api/Mcq/', addChoicesRequest); 
  }

  updateChoices(id: string, updateChoicesRequest: Choice):
  Observable<Choice> {
   return this.http.put<Choice>(this.baseApiUrl + '/api/employees/' + id, updateChoicesRequest, httpOptions);
 }

  deleteChoices(id: string): Observable<Choice> {
    return this.http.delete<Choice>(this.baseApiUrl + '/api/Mcq/' + id);
  }



 

}
