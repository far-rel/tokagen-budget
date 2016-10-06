import React from 'react';
import ReactDatePicker from 'react-date-picker'
import ClassNames from 'classnames';

class DatePicker extends React.Component {

  onDateChange (value) {
    this.props.onChange(value ? `${value}T00:00:00.000Z` : value);
  }

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  open () {
    this.setState({
      open: true
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  dropdownClassName () {
    return ClassNames('date-picker-wrap__dropdown', {
      'date-picker-wrap__dropdown--opened': this.state.open
    });
  }

  render () {
    return (
      <div className='date-picker-wrap'>
        <input
          className='date-picker-wrap__input'
          onFocus={this.open.bind(this)}
          onBlur={this.close.bind(this)}
          value={this.props.date}
        />
        <div className={this.dropdownClassName()} ref='options'>
          <ReactDatePicker
            date={this.props.date}
            onChange={this.onDateChange.bind(this)}
          />
        </div>
      </div>
    );
  }

}

export default DatePicker;
