import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Usager} from "../models/usager.model";

@Injectable({
  providedIn: 'root'
})
export class UsagersService {
  host = environment.url
  usagers : Array<Usager>;
  constructor(private http: HttpClient) {
  }


  getUsagers() {
    return this.http.get(this.host + "/api-neo4j/usagers");
  }

  addUsager(value) {
    return this.http.post(this.host + "/api-neo4j/usagers", value);
  }

  getUsager(cin) {

    return this.http.get(this.host + "/api-neo4j/usagers/" + cin);
  }

  updateUsager(value) {
    return this.http.put(this.host + "/api-neo4j/usagers/" + value.id, value);
  }

  deleteUsager(cin) {

    return this.http.delete(this.host + "/api-neo4j/usagers/" + cin);
  }

  getUsagersFonctions(): Array<string>{
    return new Array<string>("ETUDIANT","SALARIE","LIBERAL","RETRAITE","FONCTIONNAIRE");
  }


}
