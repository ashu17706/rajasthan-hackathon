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
        {this.props.items.map(item => (
          <MenuItem value={item.value} primaryText={item.label} key={item.value}/>
        ))}
      </SelectField>
    );
  }
}
