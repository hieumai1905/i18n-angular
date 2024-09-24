import {Component, OnInit} from '@angular/core';
import {Customer} from "../../models/Customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  page: number = 1;

  pageSize: number = 5;

  searchText: string = '';

  customers: Array<Customer> = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.findAll().subscribe((customers: Array<Customer>) => {
      this.customers = customers;
    });
  }

  deleteCustomer(id: number | undefined) {
    if (id !== undefined) {
      const confirmed = confirm('Are you sure you want to delete this customer?');

      if (confirmed) {
        this.customerService.deleteById(id).subscribe(() => {
          this.loadCustomers();
        });
      }
    } else {
      console.error("Customer ID is undefined");
    }
  }


  searchCustomer() {
    this.customerService.searchCustomersByName(this.searchText).subscribe((customers: Array<Customer>) => {
      this.customers = customers;
    });
  }
}
