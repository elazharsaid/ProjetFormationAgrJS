import { State } from '../enums/state.enums';

export interface Item {
  name: string;
  ref: string;
  state: State;
}
