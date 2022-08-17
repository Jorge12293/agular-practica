import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { APIModel } from '../models/api-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<APIModel>{
    return this.http.get<APIModel>('https://reqres.in/api/users?page=2');
  }
}


