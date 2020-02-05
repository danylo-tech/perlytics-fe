import React, { Component } from 'react';
import axios from 'axios';
import SimpleBarChart from './SimpleBarChart'

class Domain extends React.Component {
    state = {
    date: 0,
    time_interval: "day",
    api_data: {
    }
  };
    getData = () => {
    axios.get("http://youta-api.ngrok.io/api-domain/?interval=" + this.state.time_interval
              + "&domain=" + this.props.match.params.id)
      .then(res => {
        const api_data = res.data;
        this.setState({ api_data });
        console.log("data has been updated");
        console.log(this.state.api_data);
      })
    };

  componentDidMount() {
      this.getData();
  };
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Domain</h1>
        <p>{params.id}</p>
        <p>{this.props.match.params.id}</p>
        <SimpleBarChart xaxis="date" col="seconds" data={this.state.api_data.daily}  />
      </div>
    )
  }
}
export default Domain