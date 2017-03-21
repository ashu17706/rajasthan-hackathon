import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SchemeDetailsCard from './SchemeDetailsCard';
import ReviewCard from './ReviewCard';
import CriteriaCard from './CriteriaCard';
import NotificationCard from './NotificationCard';
import DepartmentCard from './DepartmentCard';

class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
    form_data: {}
  };

  handleNext = () => {
    const stepIndex = this.state.stepIndex < 4 ? this.state.stepIndex + 1 : 4;
    console.log(stepIndex);
    this.setState({
      stepIndex:  stepIndex,
      finished: stepIndex >= 4
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select Department';
      case 1:
        return 'Scheme Details';
      case 2:
        return 'Criteria';
      case 3:
        return 'Notification Settings';
      case 4:
        return 'Review & Schedule'
    }
  }
  storeData = (data) => {
    let oldFormData = this.state.form_data;
    let newFormData = data;
    newFormData = Object.assign(oldFormData, newFormData);
    this.setState({newFormData});
    console.log(this.state);
  }

  getStateCard = (index) => {
    switch(index) {
      case 0:
        return <DepartmentCard
                goNext={this.handleNext}
                goBack={this.handlePrev}
                heading={this.getStepContent(this.state.stepIndex)}
                dataStore={this.storeData}
              />;
      case 1:
        return <SchemeDetailsCard
                goNext={this.handleNext}
                goBack={this.handlePrev}
                heading={this.getStepContent(this.state.stepIndex)}
                dataStore={this.storeData}
              />;
      case 2:
        return <CriteriaCard
                goNext={this.handleNext}
                goBack={this.handlePrev}
                heading={this.getStepContent(this.state.stepIndex)}
              />;
      case 3:
        return <NotificationCard
                goNext={this.handleNext}
                goBack={this.handlePrev}
                heading={this.getStepContent(this.state.stepIndex)}
              />;
      case 4:
        return <ReviewCard
                goNext={this.handleNext}
                goBack={this.handlePrev}
                heading={this.getStepContent(this.state.stepIndex)}
                schemeName="Scheme One"
                notificationDetails="12 AUG 2012 8:21PM"
                message="Govt. of Rajasthan "
                families={this.props.families}
              />;
    }
  }
  render = () => {
    console.log("Render", this.props.families);
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Department</StepLabel>
          </Step>
          <Step>
            <StepLabel>Scheme Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Criteria</StepLabel>
          </Step>
          <Step>
            <StepLabel>Notification Settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review & Schedule</StepLabel>
          </Step>
        </Stepper>
        <div style={{height: '500px', minHeight: '500px', padding: '10px'}}>
          {this.getStateCard(this.state.stepIndex)}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;
