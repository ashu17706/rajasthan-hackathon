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
      selected: 1,
      label: "Department",
      items: [
        { value: 1, label: "Department of Education" },
        { value: 2, label: "Department of Agriculture" }
      ]
    }
  }

  handleChange = (event, index, selected) => this.setState({selected});

  saveData = () => {
    this.props.dataStore({department: this.state.label});
    this.props.goNext();
  }

  render = () => {
    return (
      <Card style={{height: '520px', position: 'relative'}}>
        <Toolbar>
          <ToolbarGroup>
              <ToolbarTitle text={this.props.heading} />
          </ToolbarGroup>
        </Toolbar>
        <CardText>
          <SelectDropdowns
            change={this.handleChange}
            value={this.state.selected}
            label={this.state.label}
            items={this.state.items}/>
        </CardText>
        <div style={{position: 'absolute', bottom: '5px', right: '5px'}}>
          <CardActions>
            <RaisedButton primary={true} label="Next" onClick={this.saveData}/>
          </CardActions>
        </div>
      </Card>
    );
  }
}
