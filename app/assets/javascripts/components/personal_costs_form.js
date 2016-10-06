import React from 'react';
import { connect } from 'react-redux';
import BasicForm from './utils/basic_form';
import { changeField, submitNew } from '../actions/personal_costs';
import DatePicker from './ui/date_picker'

class PersonalCostsForm extends React.Component {

  onCostChange (e) {
    this.props.dispatch(changeField('cost', e.target.value));
  }

  onDescriptionChange (e) {
    this.props.dispatch(changeField('description', e.target.value));
  }

  onDateChange (value) {
    this.props.dispatch(changeField('date', value));
  }

  submitForm () {
    this.props.dispatch(submitNew(this.props.cost, this.props.description, this.props.date));
  }

  render () {
    return (
      <BasicForm
        className='pure-form pure-form-aligned'
        handleSubmit={this.submitForm.bind(this)}
      >
        <div className='pure-control-group'>
          <label htmlFor='personal_cost_description'>{'Opis'}</label>
          <input
            id='personal_cost_description'
            value={this.props.description}
            onChange={this.onDescriptionChange.bind(this)}
          />
        </div>
        <div className='pure-control-group'>
          <label htmlFor='personal_cost_cost'>{'Kwota'}</label>
          <input
            id='personal_cost_cost'
            value={this.props.cost}
            onChange={this.onCostChange.bind(this)}
          />
        </div>
        <div className='pure-control-group'>
          <label htmlFor='personal_cost_date'>{'Data'}</label>
          <DatePicker
            onChange={this.onDateChange.bind(this)}
            date={this.props.date}
          />
        </div>
        <div className='pure-controls'>
          <button
            className='pure-button pure-button-primary'
            onClick={this.submitForm.bind(this)}
          >
            {'Dodaj'}
          </button>
        </div>
      </BasicForm>
    );
  }

}

let mapStateToProps = (state) => {
  return {
    cost: state.personalCost.newCost.cost,
    description: state.personalCost.newCost.description,
    date: state.personalCost.newCost.date
  };
};

export default connect(mapStateToProps)(PersonalCostsForm);
