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
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    console.log('log');
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  getStateCard = (index) => {
    switch(index) {
      case 0:
        return <DepartmentCard goNext={this.handleNext} goBack={this.handlePrev}/>;
      case 1:
        return <SchemeDetailsCard goNext={this.handleNext} goBack={this.handlePrev}/>;
      case 2:
        return <CriteriaCard goNext={this.handleNext} goBack={this.handlePrev}/>;
      case 3:
        return <NotificationCard goNext={this.handleNext} goBack={this.handlePrev}/>;
      case 4:
        return <ReviewCard goNext={this.handleNext} goBack={this.handlePrev}/>;


    }
  }
  render = () => {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Select Department</StepLabel>
          </Step>
          <Step>
            <StepLabel>New Scheme Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select Criteria</StepLabel>
          </Step>
          <Step>
            <StepLabel>Schedule Notification</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review & Schedule</StepLabel>
          </Step>
        </Stepper>
        <div style={{height: '500px'}}>
          {this.getStateCard(this.state.stepIndex)}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;
