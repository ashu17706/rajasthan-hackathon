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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Bhamashah Scheme Notification Schedular" />
          {/* <SchemeDetailsCard />
          <CriteriaCard />
          <NotificationCard /> */}
          <HorizontalLinearStepper />
        </div>
      </MuiThemeProvider>
    );
  }
}
