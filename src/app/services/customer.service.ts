import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/Customer";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const apiUrl = `${environment.apiUrl}/customers`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  add(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(apiUrl, customer);
  }

  findAll(): Observable<Array<Customer>> {
    return this.httpClient.get<Array<Customer>>(apiUrl);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${apiUrl}/${id}`);
  }

  update(customer: Customer, id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(`${apiUrl}/${id}`, customer);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${apiUrl}/${id}`);
  }

  searchCustomerByPhone(phone: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${apiUrl}/searchByPhone?phone=${phone}`);
  }

  searchCustomersByName(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${apiUrl}/searchCustomersByName?name=${name}`);
  }

  searchCustomersByEmail(email: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${apiUrl}/searchCustomersByEmail?email=${email}`);
  }
}
