import React from 'react';
import { Card, CardHeader, CardMedia, CardTitile, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class SchemeDetailsCard extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
          <Card>
            <Toolbar>
              <ToolbarGroup>
                  <ToolbarTitle text="Scheme Details" />
              </ToolbarGroup>
            </Toolbar>
            <CardText>
              <TextField underlineShow={true} fullWidth={true} floatingLabelFixed={true} floatingLabelText="Scheme Name"/>
              <TextField underlineShow={true} fullWidth={true} floatingLabelFixed={true} floatingLabelText="Scheme Description"/>
            </CardText>
            <CardActions>
              <FlatButton label="Back" onClick={this.props.goBack}/>
              <RaisedButton label="Next" onClick={this.props.goNext}/>
            </CardActions>
          </Card>
        );
    }
};
