import React from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectDropdowns from './SelectDropdowns';

export default class DepartmentCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Card>
        <Toolbar>
          <ToolbarGroup>
              <ToolbarTitle text="Scheme Details" />
          </ToolbarGroup>
        </Toolbar>
        <CardText>
          <SelectDropdowns
            label="Department"
            change={this.handleChange}
            value={this.state.value}/>
        </CardText>
        <CardActions>
          <RaisedButton label="Next" onClick={this.props.goNext}/>
        </CardActions>
      </Card>
    );
  }
}
