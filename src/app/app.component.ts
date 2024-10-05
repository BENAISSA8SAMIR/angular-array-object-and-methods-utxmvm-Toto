import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  employee = {
    name: "monika",
    age: 20,
    salary: 200000,
    experiance: 1
  };

  employeeList = [{
    name: "monika",
    age: 20,
    salary: 200000,
    experiance: 1
  }, {
    name: "amrish",
    age: 23,
    salary: 200,
    experiance: 1.5
  }, {
    name: "gowri",
    age: 25,
    salary: 2000000,
    experiance: 2
  }];

  constructor() {
    //array fill -rarely used
    let filledArray = new Array(3).fill(6);
    console.log(filledArray);
    console.log(this.employeeList[0].name);
    console.log(this.employee["salary"]);
    let filteredArray = this.employeeList.filter(function(employee){
      console.log(employee.experiance>1)
      return employee.experiance>1;
    })
    // Find given variable is  an array
    console.log(Array.isArray(this.employeeList));

    // Find the index
    // We cannot use indexOf for array object 
    let amrishIndex = this.employeeList.findIndex(function (empl) {
      return  empl.name === 'gowri';
    });
    console.log(amrishIndex)
  }
}
