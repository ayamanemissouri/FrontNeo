import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componants/home/home.component';
import {SplitterModule} from 'primeng/splitter';
import { UsagerComponent } from './componants/usager/usager.component';
import { TransportsComponent } from './componants/transports/transports.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { UsagerCrudComponent } from './componants/usager/usager-crud/usager-crud.component';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';

import {MessageService} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {UsagersService} from "./services/usagers.service";
import {HttpClientModule} from "@angular/common/http";


import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { RadioButtonModule } from "primeng/radiobutton";
import {TransportsService} from "./services/transports.service";
import { UsagerAddComponent } from './componants/usager/usager-add/usager-add.component';
import { UsagerUpdateComponent } from './componants/usager/usager-update/usager-update.component';

import { DatePipe } from '@angular/common';
import {PanelModule} from "primeng/panel";
import { TransportsCrudComponent } from './componants/transports/transports-crud/transports-crud.component';
import { TransportsAddComponent } from './componants/transports/transports-add/transports-add.component';
import { TransportsUpdateComponent } from './componants/transports/transports-update/transports-update.component';
import { StationsComponent } from './components/stations/stations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsagerComponent,
    TransportsComponent,
    UsagerCrudComponent,
    UsagerAddComponent,
    UsagerUpdateComponent,
    TransportsCrudComponent,
    TransportsAddComponent,
    TransportsUpdateComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
    AccordionModule,
    TableModule,
    PaginatorModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    ReactiveFormsModule,
    PanelModule,
    FieldsetModule
  ],
  providers: [MessageService, ConfirmationService, UsagersService, TransportsService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
