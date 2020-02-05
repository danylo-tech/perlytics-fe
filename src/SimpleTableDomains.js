import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default class SimpleTable extends PureComponent {  

  render() {
    return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Domain</TableCell>
            <TableCell align="right">Seconds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.data.map(row => (
            <TableRow key={row.domain}>
              <TableCell component="th" scope="row"><Link to={'/domain/' + row.domain}> 
                {row.domain}</Link>
              </TableCell>
              <TableCell align="right">{row.seconds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
}
