import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from './state.Model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  states: State[];
  baseUrl: string = environment.production ? "http://gcassin2022-001-site1.etempurl.com/api/states" : "https://localhost:44344/api/states";

  getStates(){
    this.http.get(this.baseUrl).toPromise().then(x => {
      this.states = x as State[];
    })
  }
}
