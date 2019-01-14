import { MessageActions, SEND_MESSAGE, SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS } from './message.actions';
import { Message } from './models/message';

export interface MessageState {
  message: Message;
}

const initialState: MessageState = {
  message: null
};

export function messageReducer(state = initialState, action: MessageActions) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case SEND_MESSAGE_FAIL:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
