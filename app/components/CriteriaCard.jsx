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
        category: {
            selected: 0,
            label: "Category",
            items: [
              { value: 0, label: 'None' },
              { value: 1, label: 'GEN' },
              { value: 2, label: 'SC' },
              { value: 3, label: 'ST' },
              { value: 4, label: 'OBC' }
            ]
        },
        ration_card_category: {
          selected: 0,
          label: "Ration Card Category",
          items: [
            { value: 0, label: 'None' },
            { value: 1, label: 'BPL' },
            { value: 2, label: 'APL' },
            { value: 3, label: 'Antyodaya' }
          ]
        },
        education_qualification: {
          selected: 0,
          label: "Educational Qualification",
          items: [
            { value: 0, label: 'None' },
            { value: 1, label: '10th Pass' },
            { value: 2, label: '12th Pass' },
            { value: 3, label: 'Graduate' },
            { value: 4, label: 'Post-Graduate' }
          ]
        },
        land_type: {
          selected: 0,
          label: "Land Type",
          items: [
            { value: 0, label: 'None' },
            { value: 1, label: 'Irrigated' },
            { value: 2, label: 'Non-Irrigated' },
            { value: 3, label: 'Other' }
          ]
      }
    }
  }

    handleCategoryChange = (event, index, value) => {
      event.preventDefault();
      this.setState((prevState) => {
        let newState = prevState;
        newState.category.selected = value;
        this.setState(newState);
      });
    }

    handleRationCardChange = (event, index, value) => {
      event.preventDefault();
      this.setState((prevState) => {
        let newState = prevState;
        newState.ration_card_category.selected = value;
        this.setState(newState);
      });
    }

    handleEducationChange = (event, index, value) => {
      event.preventDefault();
      this.setState((prevState) => {
        let newState = prevState;
        newState.education_qualification.selected = value;
        this.setState(newState);
      });
      console.log(this.state);
    }

    handleLandTypeChange = (event, index, value) => {
      event.preventDefault();
      this.setState((prevState) => {
        let newState = prevState;
        newState.land_type.selected = value;
        this.setState(newState);
      })
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
                <SelectDropdowns change={this.handleCategoryChange} value={this.state.category.selected} label={this.state.category.label} items={this.state.category.items}/>
              </div>
              <div style={{margin: '10px'}}>
                <SelectDropdowns change={this.handleRationCardChange} value={this.state.ration_card_category.selected} label={this.state.ration_card_category.label} items={this.state.ration_card_category.items}/>
              </div>
              <div style={{margin: '10px'}}>
                <SelectDropdowns change={this.handleEducationChange} value={this.state.education_qualification.selected} label={this.state.education_qualification.label} items={this.state.education_qualification.items}/>
              </div>
              <div style={{margin: '10px'}}>
                <SelectDropdowns change={this.handleLandTypeChange} value={this.state.land_type.selected} label={this.state.land_type.label} items={this.state.land_type.items}/>
              </div>
            </div>
            {/* <SelectDropdowns change={this.handleChange} value={this.state.value} label="Land Category"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Residential Type"/>
            <SelectDropdowns change={this.handleChange} value={this.state.value} label="Annual Income"/> */}
          </CardText>
          <div style={{position: 'absolute', bottom: '5px', right: '5px'}}>
            <CardActions>
              <FlatButton label="Back" onClick={this.props.goBack}/>
              <RaisedButton primary={true} label="Next" onClick={this.props.goNext}/>
            </CardActions>
        </div>
        </Card>
      );
    }
};
