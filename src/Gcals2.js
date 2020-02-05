import React, { PureComponent } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Gcals extends PureComponent {
  render() {
      console.log(this.props.data);
    return (
      <BarChart width={150} height={40} data={this.props.data}>
        <Bar dataKey="total" fill="#8884d8" />
        <Bar dataKey="organized" fill="#3884d8" />
      </BarChart>
    );
  }
}
