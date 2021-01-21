import { Component, OnInit } from '@angular/core';
import {Usager} from "../../models/usager.model";
import {UsagersService} from "../../services/usagers.service";

@Component({
  selector: 'app-usager',
  templateUrl: './usager.component.html',
  styleUrls: ['./usager.component.css']
})
export class UsagerComponent implements OnInit {

  usagers;

  constructor(private usagerService: UsagersService) { }

  ngOnInit(): void {
    this.getUsagers();

  }
  getUsagers()
  {
    this.usagerService.getUsagers().subscribe(data =>{
      console.log(data)
      this.usagers = data;
    },error => console.log(error));
  }

}
