import React from 'react';
import { Card, CardHeader, CardMedia, CardTitile, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class NotificationCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Card>
          <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Notification Settings" />
            </ToolbarGroup>
          </Toolbar>
          <CardText>

          </CardText>
          <CardActions>
            <FlatButton label="Back" onClick={this.props.goBack}/>
            <RaisedButton label="Next" onClick={this.props.goNext}/>
          </CardActions>
        </Card>
      );
    }
};
