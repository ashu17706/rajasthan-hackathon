import React from 'react';
import { Card, CardHeader, CardMedia, CardTitile, CardText, CardActions } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class ReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success_message: 'Your notification request have been recorded successfully.',
      display: false
    }
  }

  handleSubmit = () => {
    this.setState({
      display: true
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
        <CardHeader
          title="Scheduling details"
          subtitle=""
          actAsExpander={true}
        />
        <CardText>
          <List>
            <ListItem primaryText={`${this.props.schemeName}`} secondaryText="Scheme Name"/>
            <ListItem primaryText={this.props.notificationDetails} secondaryText="Scheduled date & time for notification"/>
            <ListItem primaryText={this.props.message} secondaryMessage="Message"/>
            <ListItem secondaryText="Beneficiary Bhamasha families" />
        </List>
        <div style={styles.wrapper}>
          {
            this.props.families.map((family, index) => (
              <Chip style={styles.chip}>{family.bhamasha_id}</Chip>
            ))
          }
        </div>
        </CardText>
        <div style={{position: 'absolute', bottom: '5px', right: '5px'}}>
          <CardActions>
            <FlatButton label="Back" onClick={this.props.goBack}/>
            <RaisedButton primary={true} label="Submit" onClick={this.handleSubmit}/>
          </CardActions>
        </div>
      </Card>
    );
  }
};
