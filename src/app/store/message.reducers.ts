import {
  DELETE_MESSAGE, DELETE_MESSAGE_FAIL, DELETE_MESSAGE_SUCCESS,
  LOAD_MESSAGES, LOAD_MESSAGES_FAIL,
  LOAD_MESSAGES_SUCCESS,
  MessageActions,
  SEND_MESSAGE,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_SUCCESS
} from './message.actions';
import { Message } from '../models/message';

export interface MessageState {
  message: Message;
  list: Message[];
}

const initialState: MessageState = {
  message: null,
  list: []
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
    case LOAD_MESSAGES:
      return {
        ...state
      };
    case LOAD_MESSAGES_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case LOAD_MESSAGES_FAIL:
      return {
        ...state
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        delete: action.payload
      };
      case DELETE_MESSAGE_SUCCESS:
        return {
          ...state
        };
    case DELETE_MESSAGE_FAIL:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
