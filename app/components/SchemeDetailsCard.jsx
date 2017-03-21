import React from 'react';
import { Card, CardHeader, CardMedia, CardTitile, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class SchemeDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheme_name: '',
      scheme_details: ''
    }
  }

  saveData = () => {
    console.log();
    this.props.dataStore({scheme_name: this.state.scheme_name, scheme_details: this.state.scheme_Details});
    this.props.goNext();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
            <TextField
              underlineShow={true}
              fullWidth={true}
              floatingLabelFixed={true}
              floatingLabelText="Scheme Name"
              value={this.state.scheme_name}
              name="scheme_name"
              onChange={this.handleInputChange}
            />
            <TextField
              multiLine={true}
              rows={3}
              underlineShow={true}
              fullWidth={true}
              floatingLabelFixed={true}
              floatingLabelText="Scheme Description"
              value={this.state.scheme_details}
              name="scheme_details"
              onChange={this.handleInputChange}
            />
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
