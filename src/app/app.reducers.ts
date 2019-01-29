import * as fromMessageState from './store/message.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { messageReducer } from './store/message.reducers';


export interface AppState {
  messageState: fromMessageState.MessageState;
}

export const reducers: ActionReducerMap<AppState> = {
  messageState: messageReducer
};
