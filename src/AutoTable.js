import React, { PureComponent } from 'react';
import { ReactMUIDatatable } from "react-material-ui-datatable";

export default class AutoTable extends PureComponent {
    
     columns = [
      {
        name: "firstName",
        label: "First Name"
      },
      {
        name: "lastName",
        label: "Last Name"
      },
      {
        name: "age",
        label: "Age"
      },
      {
        name: "car.make",
        label: "Car make"
      }
    ];

     data = [
      { firstName: "Kylynn", lastName: "Lathey", age: 19, car: { make: "BWM" } },
      { firstName: "Cly", lastName: "Dukelow", age: 46,  car: { make: "Mitsubishi" } },
      { firstName: "Afton", lastName: "Chaffer", age: 34,  car: { make: "Audi" } },
      { firstName: "Deva", lastName: "Cowope", age: 22, car: { make: "Reno" } }
    ];
  render() {
    return (

    <ReactMUIDatatable title={"Awesome list"} data={this.data} columns={this.columns} />
    );
  }
}



