import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Employee Details</h2>

    <ul *ngFor=" let emp of employees" >
      <li>{{emp.id}}  {{emp.name}}  {{emp.age}}</li>
    </ul>
  
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [] ;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe (data => this.employees = data );
  }

}
