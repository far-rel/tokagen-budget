import Reducer from '../base';

class List extends Reducer {

  constructor() {
    super();
    this.initialState = [];
  }

}

export default (new List()).reducerFunction();
