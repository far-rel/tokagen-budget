import { PersonalCost } from '../repositories';

let prefix = 'PERSONAL_COST';

export function load () {
  return {
    type: `${prefix}_LOAD`,
    async: true,
    payload: null,
    repository: null
  };
}

export function submitNew (cost, description, date) {
  return {
    type: `${prefix}_CREATE`,
    async: true,
    payload: {
      personal_cost: {
        cost,
        description,
        date
      }
    },
    repository: PersonalCost.Create
  }
}


export function changeField (field, value) {
  return {
    type: `${prefix}_CHANGE_FIELD`,
    field,
    value
  };
}
