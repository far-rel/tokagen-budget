import { Session } from '../repositories';

let prefix = 'SESSION';

export function check () {
  return {
    type: `${prefix}_CHECK`,
    async: true,
    payload: null,
    repository: Session
  };
}
