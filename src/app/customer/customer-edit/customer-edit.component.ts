import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, ParamMap, Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {
  logBuilderStatusWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    FormsModule
  ],
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  message: string = '';
  id: number = -1;
  createForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    this.loadForm();
  }

  loadForm() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.customerService.findById(this.id).subscribe((customer) => {
        this.createForm.patchValue({
          id: customer.id,
          name: customer.name,
          email: customer.email,
          phone: customer.phone
        });
      });
    });
    this.createForm.get('id')?.disable();
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    this.customerService.update(this.createForm.value, this.id).subscribe(() => {
      this.createForm.reset();
      this.message = 'Customer edited successfully';
    });
  }
}
