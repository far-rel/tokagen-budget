import Reducer from '../base';

class NewCost extends Reducer {

  constructor() {
    super();
    this.initialState = {
      cost: '',
      description: '',
      date: ''
    };
  }

  onPersonalCostChangeField (state, action) {
    let tmp = {};
    tmp[action.field] = action.value;
    return Object.assign({}, state, tmp);
  }

}

export default (new NewCost()).reducerFunction();
