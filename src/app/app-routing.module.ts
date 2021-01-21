import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componants/home/home.component";
import {UsagerCrudComponent} from "./componants/usager/usager-crud/usager-crud.component";
import {AppComponent} from "./app.component";
import {TransportsComponent} from "./componants/transports/transports.component";
import {UsagerComponent} from "./componants/usager/usager.component";
import {TransportsCrudComponent} from "./componants/transports/transports-crud/transports-crud.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'usagers', component: UsagerComponent},
  {path:'transports', component: TransportsComponent},
  {path:'usagers/crud', component: UsagerCrudComponent},
  {path:'transports/crud', component: TransportsCrudComponent},



  {path:'', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
