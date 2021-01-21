import { Injectable } from '@angular/core';
import {Transport} from "../models/Transport.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransportsService {
  transports : Array<Transport>;
  host=environment.url;
  constructor(private http:HttpClient) { }

  getTransportsTypes(): Array<string>{
    return new Array<string>("TAXI","TRAM","BUS","COVOITURAGE");
  }
  getTransports() {
    return this.http.get(this.host + "/transports");
  }

  addTransport(value) {
    return this.http.post(this.host + "/transports", value);
  }

  getTransport(cin) {

    return this.http.get(this.host + "/transports/" + cin);
  }

  updateTransport(value) {
    return this.http.put(this.host + "/transports/" + value.id, value);
  }

  deleteTransport(cin) {

    return this.http.delete(this.host + "/transports/" + cin);
  }
}
