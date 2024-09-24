import {RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerAddComponent} from "./customer-add/customer-add.component";
import {NgModule} from "@angular/core";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'create',
    component: CustomerAddComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
