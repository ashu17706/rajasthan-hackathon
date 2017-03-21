import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SchemeDetailsCard from './SchemeDetailsCard';
import CriteriaCard from './CriteriaCard';
import NotificationCard from './NotificationCard';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./App.css');
let families = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  componentWillMount() {
    fetch('http://139.59.33.29:8000/api/info/')
      .then(data => data.json())
      .then(data => {
        families.push(...data);
        console.log(families);
    });
  }
  render() {
    console.log(this.props.families);
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Bhamashah Scheme Notification Scheduler" />
          <HorizontalLinearStepper families={families}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
