import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerRoutingModule} from "./customer-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {CustomerAddComponent} from "./customer-add/customer-add.component";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    CustomerEditComponent,
    CustomerEditComponent,
    CustomerAddComponent,
    NgxPaginationModule,
    FormsModule
  ]
})
export class CustomerModule {
}
