import React from 'react';
import { Card, CardHeader, CardMedia, CardTitile, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectDropdowns from './SelectDropdowns';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

export default class NotificationCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: 1,
        label: "Department",
        items: [
          { value: 1, label: "Department of Agriculture" },
          { value: 2, label: "Department of Education" }
        ]
      }
    }

    handleChange = (event, index, selected) => {
      this.setState({selected});
    }

    render() {
      return (
        <Card style={{height: '520px', position: 'relative'}}>
          <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text={this.props.heading} />
            </ToolbarGroup>
          </Toolbar>
          <CardText>
            <div style={{width: '100%'}}>
              <div style={{margin: '10px'}}>
                <DatePicker hintText="Selcect Date"
                  underlineShow={true}
                  floatingLabelFixed={true}
                  floatingLabelText="Date"
                />
                <TimePicker
                  underlineShow={true}
                  floatingLabelFixed={true}
                  floatingLabelText="Time"
                  hintText="Select Time"
                  autoOk={true}
                />
                <TextField
                  underlineShow={true}
                  fullWidth={true}
                  floatingLabelFixed={true}
                  floatingLabelText="Notification Message"
                />
              </div>
            </div>
          </CardText>
          <CardText>

          </CardText>
          <div style={{position: 'absolute', bottom: '5px', right: '5px'}}>
            <CardActions>
              <FlatButton
                label="Back"
                onClick={this.props.goBack}
              />
              <RaisedButton
                primary={true}
                label="Next"
                onClick={this.props.goNext}/>
            </CardActions>
          </div>
        </Card>
      );
    }
};
