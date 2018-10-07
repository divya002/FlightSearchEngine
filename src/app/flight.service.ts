import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { Response, Http } from '@angular/http'
import { Router } from '@angular/router';
import {take} from 'rxjs/operators';
import 'rxjs'
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  path = environment.path;
  constructor(private http: HttpClient) { }
  getRecord() {
    return this.http.get<any>(this.path);

  }
  
 
}
