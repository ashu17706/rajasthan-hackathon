import React from 'react';
import { Card, CardHeader, CardMedia, CardTitile, CardText, CardActions } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class ReviewCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <Toolbar>
          <ToolbarGroup>
              <ToolbarTitle text="Review and Notification" />
          </ToolbarGroup>
        </Toolbar>
        <CardText>

        </CardText>
        <CardActions>
          <FlatButton label="Back" onClick={this.props.goBack}/>
          <RaisedButton label="next" onClick={this.props.goNext}/>
        </CardActions>
      </Card>
    );
  }
};
