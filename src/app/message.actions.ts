import { Action } from '@ngrx/store';
import { Message } from './models/message';
import { HttpErrorResponse } from '@angular/common/http';
import { uniqueActionType } from './unique-action-type';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL';
export const LOAD_MESSAGES = uniqueActionType('LOAD_MESSAGES');
export const LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_FAIL = 'LOAD_MESSAGES';

export class SendMessage implements Action {
  readonly  type = SEND_MESSAGE;
  constructor(public payload: Message) {}
}

export class SendMessageSuccess implements Action {
  readonly  type = SEND_MESSAGE_SUCCESS;
  constructor(public payload: any = null) { }
}

export class SendMessageFail implements Action {
  readonly  type = SEND_MESSAGE_FAIL;
  constructor(public payload: HttpErrorResponse) {}
}

export class LoadMessages implements Action {
  readonly type = LOAD_MESSAGES;
  constructor(public payload: any = null) { }
}

export class LoadMessagesSuccess implements  Action {
  readonly type = LOAD_MESSAGES_SUCCESS;
  constructor(public payload: Message[]) {}
}

export class LoadMessagesFail implements Action {
  readonly  type = LOAD_MESSAGES_FAIL;
  constructor(public payload: HttpErrorResponse) {}
}

export type MessageActions = SendMessage | SendMessageSuccess | SendMessageFail | LoadMessages | LoadMessagesSuccess | LoadMessagesFail;
