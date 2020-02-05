import React, { Component } from 'react';
import axios from 'axios';
import Gcals from './Gcals';
import Gcals2 from './Gcals2';
import TimeMenu from './TimeMenu';
import TimeSelect from './TimeSelect';
import DatePicker from './DatePicker';
import SimpleBarChart from './SimpleBarChart';
import SimplePieChart from './SimplePieChart';
import SimplePieChart2 from './SimplePieChart2';
import SimpleTable from './SimpleTable';
import SimpleTableDomains from './SimpleTableDomains';

class App extends Component {
  state = {
    date: 0,
    time_interval: 'day',
    api_data: null,
  };
  cbDate = childData => {
    this.setState({ date: childData });
    console.log('from parent');
    console.log(this.state.date);
  };
  cbTimeInterval = childData => {
    this.setState({ time_interval: childData });
    console.log('from parent');
    console.log(this.state.time_interval);
    this.getData();
  };
  getData = nextProps => {
    const { userInfo } = nextProps || this.props;

    if (!userInfo) return;

    axios
      .post('http://youta-api.ngrok.io/api7/', {
        interval: this.state.time_interval,
        email: userInfo.email,
      })
      .then(res => {
        const api_data = res.data;
        this.setState({ api_data });
        console.log('data has been updated');
        console.log(this.state.api_data);
      });
  };

  componentDidMount() {
    this.getData();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userInfo !== this.props.userInfo) {
      this.getData(nextProps);
    }
    return true;
  }

  render() {
    const { userInfo } = this.props;

    const { api_data } = this.state;

    if (!userInfo || !api_data)
      return (
        <div className="container">
          <h3>Time Period Options</h3>
          <TimeMenu />
          <TimeSelect cbTimeInterval={this.cbTimeInterval} />
        </div>
      );

    return (
      <div className="container">
        <h3>Time Period Options</h3>
        <TimeMenu />
        <TimeSelect cbTimeInterval={this.cbTimeInterval} />
        <DatePicker cbDate={this.cbDate} />
        <h3>Calendar Events</h3>
        <Gcals2 data={api_data.gcal.daily} />
        <SimpleBarChart xaxis="name" col="total" data={api_data.gcal.daily} />
        <h3>Time Spent in Meetings</h3>
        <SimpleBarChart xaxis="name" col="duration" data={api_data.gcal.daily} />
        <h3>Number of Attendees</h3>
        <SimplePieChart data={api_data.gcal.attendees_bkts} />
        <h3>Total Emails</h3>
        <SimpleBarChart xaxis="name" col="total" data={api_data.gmail.daily} />
        <h3>Total Transaction Amount</h3>
        <SimpleBarChart xaxis="name" col="amount" data={api_data.mint.daily} />
        <h3>App Usage</h3>
        <SimpleBarChart xaxis="name" col="time_spent" data={api_data.yh.daily} />
        <SimpleTable data={api_data.yh.top_apps} />
        <h3>Browser Usage</h3>
        <SimpleBarChart xaxis="name" col="time_spent" data={api_data.wtt.daily} />
        <SimpleTableDomains data={api_data.wtt.top_domains} />
      </div>
    );
  }
}

export default App;
