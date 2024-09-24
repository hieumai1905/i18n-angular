import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    FormsModule
  ],
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  message: string = '';
  createForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });

  constructor(private customerService: CustomerService) {
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    this.customerService.add(this.createForm.value).subscribe(() => {
      this.createForm.reset();
      this.message = 'Customer added successfully';
    });
  }
}
