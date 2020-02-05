import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

export default class SimplePieChart extends PureComponent {
  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="attendees_bkts" isAnimationActive={true} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    );
  }
}
