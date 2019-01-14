import * as fromMessageState from './message.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { messageReducer } from './message.reducers';


export interface AppState {
  messageState: fromMessageState.MessageState;
}

export const reducers: ActionReducerMap<AppState> = {
  messageState: messageReducer
};
