import { Component, OnInit } from '@angular/core';
import {Transport} from "../../models/Transport.model";
import {TransportsService} from "../../services/transports.service";

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit {
  t:Transport=new Transport();

  constructor(private transportService:TransportsService) { }
  transports;
  ngOnInit(): void {
this.getTransports();

  }
  getTransports()
  {
    this.transportService.getTransports().subscribe(data=>{
      this.transports=data;
    },error => console.log(error));
  }


}
