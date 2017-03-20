import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class SelectDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SelectField
        floatingLabelText={this.props.label}
        value={this.props.value}
        onChange={this.props.change}
        autoWidth={true}
      >
        <MenuItem value={1} primaryText="Department of Agriculture" />
        <MenuItem value={2} primaryText="Department of Education" />
        <MenuItem value={3} primaryText="Department of Health and Family Welfare" />
        <MenuItem value={4} primaryText="Department of Water and Sanitation" />
      </SelectField>
    );
  }
}
