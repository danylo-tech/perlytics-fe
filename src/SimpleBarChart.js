import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class SimpleBarChart extends PureComponent {

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={this.props.xaxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={this.props.col} fill="#8884d8" />
      </BarChart>
    );
  }
}
