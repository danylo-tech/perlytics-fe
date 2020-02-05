import React, { PureComponent } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Gcals extends PureComponent {  
    state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://youta-api.ngrok.io/api5`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render() {
    return (
      <BarChart width={150} height={40} data={this.state.data.daily}>
        <Bar dataKey="total" fill="#8884d8" />
        <Bar dataKey="organized" fill="#3884d8" />
      </BarChart>
    );
  }
}
