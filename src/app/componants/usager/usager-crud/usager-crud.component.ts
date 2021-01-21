import {Component, OnInit} from '@angular/core';
import {Usager} from "../../../models/usager.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {UsagersService} from "../../../services/usagers.service";
import {FormControl, FormGroup} from "@angular/forms";
import {TransportsService} from "../../../services/transports.service";


@Component({
  selector: 'app-usager-crud',
  templateUrl: './usager-crud.component.html',
  styleUrls: ['./usager-crud.component.css']
})
export class UsagerCrudComponent implements OnInit {
  usagers;

  selectedUsagers;
  usagerDialog: boolean;
  usager;
  submitted: boolean = false;
  deleted: boolean = false;

  usagerUpdateDialog: boolean;

  constructor(private messageService: MessageService, private usagerService: UsagersService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.usagers = new Array<Usager>();
   this.getUsagers();


    /*this.getUsagers();
  }

  onClick(): void {
    console.log(this.usagers);*/

  }






  openNew() {
    this.usager = new Usager();
    this.submitted = false;
    this.usagerDialog = true;
  }

  editUsager(usager: Usager) {
    console.log(usager);
    this.usager = usager;

    this.submitted = true;
    this.usagerUpdateDialog = true;
  }


  deleteUsager(usager: Usager) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.delete(usager);
        this.messageService.add({severity: 'success', summary: 'Delete Successfully', detail: 'Delete Usager Successfully'});

      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Delete Cancel', detail: 'Delete Usager Cancel'});
      }
    });

  }


  deleteSelectedUsagers() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        for(let usager of this.selectedUsagers){
          this.deleteUsagerFromArray(usager);
        }
        this.messageService.add({severity: 'success', summary: 'Delete Successfully', detail: 'Delete Selected Usagers Successfully'});

      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Delete Canceled', detail: 'Delete Selected Usagers Canceled'});
      }
    });
  }

  deleteUsagerFromArray(usager: Usager) {
    this.usagers = this.usagers.filter((ele) => {
      return ele.id !== usager.id;
    });
  }

  saveUsager() {
    if (this.submitted) {
    } else {
      console.log(this.usager);
      // this.usagerService.createUsagerInBackend(this.usager).subscribe(
      this.usagerService.addUsager(this.usager).subscribe(
        (data) => {
          console.log(this.usager);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Usager Edited Successfuly'});
          this.usagerDialog = false;
          window.location.reload();
        },
        (err) => {
          console.log(err.message)
          this.messageService.add({severity: 'danger', summary: 'Error', detail: 'Usager Failed To Edit'});
        }
      );
    }
  }

  hideDialog() {
    this.usagerDialog = false;
    this.usagerUpdateDialog = false;
    this.submitted = false;


  }

  addUsager($event: any) {
    // To change
    this.usagers.push($event);
    this.messageService.add({severity: 'success', summary: 'Added Successfully', detail: 'Added Usager Successfully'});
    this.hideDialog();

  }

  updateUsager($event: any) {
    let usager: Usager = $event;

    const objIndex = this.usagers.findIndex((obj => obj.id == usager.id));
    this.usagers[objIndex] = usager;
    console.log(this.usagers);
    this.messageService.add({severity: 'success', summary: 'Updated Successfully', detail: 'Updated Usager Successfully'});


    this.hideDialog();
  }
  getUsagers()
  {
    this.usagerService.getUsagers().subscribe(data =>{
      console.log(data)
      this.usagers = data;
    },error => console.log(error));
  }
  delete(usager)
  {
    this.usagerService.deleteUsager(usager.id).subscribe(data=>{

    },error => console.log(error),()=>{
      this.deleteUsagerFromArray(usager);
    });
  }
}
