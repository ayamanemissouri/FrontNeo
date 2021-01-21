import { Component, OnInit } from '@angular/core';
import {Usager} from "../../../models/usager.model";
import {Transport} from "../../../models/Transport.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {TransportsService} from "../../../services/transports.service";

@Component({
  selector: 'app-transports-crud',
  templateUrl: './transports-crud.component.html',
  styleUrls: ['./transports-crud.component.css']
})
export class TransportsCrudComponent implements OnInit {
  transports;

  selectedTransports;
  transportDialog: boolean;
  transport;
  submitted: boolean = false;
  deleted: boolean = false;

  transportUpdateDialog: boolean;
  constructor(private confirmationService:ConfirmationService,private messageService:MessageService,private transportService:TransportsService) { }

  ngOnInit(): void {
    this.getTransports();
  }
  openNew() {
    this.transport = new Transport();
    this.submitted = false;
    this.transportDialog = true;
  }
  deleteUsagerFromArray(transport: Transport) {
    this.transports = this.transports.filter((ele) => {
      return ele.id !== transport.id;
    });
  }
  deleteSelectedUsagers() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        for(let transport of this.selectedTransports){
          this.delete(transport);
        }
        this.messageService.add({severity: 'success', summary: 'Delete Successfully', detail: 'Delete Selected Usagers Successfully'});

      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Delete Canceled', detail: 'Delete Selected Usagers Canceled'});
      }
    });
  }

  editTransport(transport: any) {
    this.transport = transport;

    this.submitted = true;
    this.transportUpdateDialog = true;

  }

  deleteTransport(transport: any) {

  }
  hideDialog() {
    this.transportDialog = false;
    this.transportUpdateDialog = false;
    this.submitted = false;


  }
  getTransports()
  {
    this.transportService.getTransports().subscribe(data=>{
      this.transports=data;
    },error => console.log(error));
  }

  addTransport($event: any) {
    this.transports.push($event);
    this.messageService.add({severity: 'success', summary: 'Added Successfully', detail: 'Added Usager Successfully'});
    this.hideDialog();

  }

  updateTransport($event: any) {
    const transport:Transport = $event;


    const objIndex = this.transports.findIndex((obj => obj.id === transport.id));
    this.transports[objIndex] = transport;
    console.log(this.transports);
    this.hideDialog();
    this.messageService.add({severity: 'success', summary: 'Updated Successfully', detail: 'Updated Usager Successfully'});
  }
  delete(transport)
  {
    this.transportService.deleteTransport(transport.id).subscribe(data=>{

    },error => console.log(error),()=>{
      this.deleteUsagerFromArray(transport);
    });
  }
}
