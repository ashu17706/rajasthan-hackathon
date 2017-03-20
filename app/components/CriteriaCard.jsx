import React from 'react';
import { Card, CardHeader, CardMedia, CardTitile, CardText, CardActions } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectDropdowns from './SelectDropdowns';

export default class CriteriaCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value : 1
      }
    }

    render() {
      return (
        <Card>
          <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Criteria" />
            </ToolbarGroup>
          </Toolbar>
          <CardText>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Category" />
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Ration Card Category"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Educational Qualification"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Caste"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Land Type"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Land Category"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Residential Type"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Annual Income"/>
          </CardText>
          <CardActions>
            <FlatButton label="Back" onClick={this.props.goBack}/>
            <RaisedButton label="Next" onClick={this.props.goNext}/>
          </CardActions>
        </Card>
      );
    }
};
