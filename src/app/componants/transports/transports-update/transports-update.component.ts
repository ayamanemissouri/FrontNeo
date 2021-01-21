import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Transport} from "../../../models/Transport.model";
import {TransportsService} from "../../../services/transports.service";

@Component({
  selector: 'app-transports-update',
  templateUrl: './transports-update.component.html',
  styleUrls: ['./transports-update.component.css']
})
export class TransportsUpdateComponent implements OnInit {
  @Input() transport:Transport;
  @Output() update=new EventEmitter();
  transportForm:FormGroup;
  transportsTypes;
  defaultTransport
  updateValue: Object;
  constructor(private transportService:TransportsService) { }

  ngOnInit(): void {
    this.transportsTypes=this.transportService.getTransportsTypes();
    console.log(this.transportsTypes);
    if (this.transportsTypes.length>0) {
      this.defaultTransport = this.transportsTypes[0];
    }
    this.transportForm = new FormGroup({
      id:new FormControl(this.transport.id),
      type: new FormControl(this.transport.type),
      num: new FormControl(this.transport.num),
      vitesse: new FormControl(this.transport.vitesse),
      capacity: new FormControl(this.transport.capacity),
      pdC: new FormControl(this.transport.pdC),
      prix: new FormControl(this.transport.prix),
      stations: new FormControl(this.transport.stations),
      utilisateurs: new FormControl(this.transport.utilisateurs),
      matricule:new FormControl(this.transport.matricule)


    })
  }

  updateTransport(value: any) {
    console.log(value);
    this.transportService.updateTransport(value).subscribe(data=>{
      console.log(data);
      this.updateValue=data;
    },error => console.log(error),()=>{
      this.update.emit(this.updateValue);

    })

  }
}
