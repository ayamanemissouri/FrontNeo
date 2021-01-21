import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TransportsService} from "../../../services/transports.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UsagersService} from "../../../services/usagers.service";

@Component({
  selector: 'app-usager-add',
  templateUrl: './usager-add.component.html',
  styleUrls: ['./usager-add.component.css']
})
export class UsagerAddComponent implements OnInit {
  @Output()
  add = new EventEmitter();
  usager;
  transportsTypes: Array<string>;
  defaultTransport: string ;

  usagersFonctions: Array<string>;
  defaultUsagerFonction: string ;

  usagerForm: FormGroup;



  constructor(private usagerService: UsagersService, private transportService: TransportsService) { }

  ngOnInit(): void {
    this.transportsTypes=this.transportService.getTransportsTypes();
    console.log(this.transportsTypes);
    if (this.transportsTypes.length>0) {
      this.defaultTransport = this.transportsTypes[0];
    }

    this.usagersFonctions=this.usagerService.getUsagersFonctions();
    console.log(this.usagersFonctions);
    if (this.usagersFonctions.length>0) {
      this.defaultUsagerFonction = this.usagersFonctions[0];
    }

    this.usagerForm = new FormGroup({
      nom: new FormControl(''),
      an: new FormControl(''),
      h: new FormControl(''),
      pt: new FormControl(''),
      fct: new FormControl(''),
      transports:new FormControl([])

    })
  }
  saveUsager(value){
    value.an = new Date(value.an);
    console.log(value);
    this.usagerService.addUsager(value).subscribe(data=>{
      this.usager=data;
      console.log(data)

    },error => console.log(error),()=>{
      this.add.emit(this.usager);
      this.usagerForm.reset();
    })


  }


}
