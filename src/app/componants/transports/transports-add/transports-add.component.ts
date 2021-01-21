import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsagersService} from "../../../services/usagers.service";
import {TransportsService} from "../../../services/transports.service";

@Component({
  selector: 'app-transports-add',
  templateUrl: './transports-add.component.html',
  styleUrls: ['./transports-add.component.css']
})
export class TransportsAddComponent implements OnInit {
  transportForm: FormGroup;
  @Output()
  add = new EventEmitter();
  constructor(private usagerService: UsagersService, private transportService: TransportsService) {
  }
  transport;
  transportsTypes: Array<string>;
  defaultTransport: string;

  ngOnInit(): void {

    this.transportsTypes = this.transportService.getTransportsTypes();
    console.log(this.transportsTypes);
    if (this.transportsTypes.length > 0) {
      this.defaultTransport = this.transportsTypes[0];

      this.transportForm = new FormGroup({
        type: new FormControl(''),
        num: new FormControl(0),
        vitesse: new FormControl(220),
        capacity: new FormControl(0),
        pdC: new FormControl(''),
        prix: new FormControl(0),
        stations: new FormControl([]),
        utilisateurs: new FormControl([]),
        matricule:new FormControl('')


      })
    }

  }

  saveTransport(value: any) {
    console.log(value);
    this.transportService.addTransport(value).subscribe(data=>{
      this.transport=data;
      console.log(data)

    },error => console.log(error),()=>{
      this.add.emit(this.transport);
      this.transportForm.reset();
    })
  }
}
