import { Action } from '@ngrx/store';
import { Message } from './models/message';
import { HttpErrorResponse } from '@angular/common/http';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESSFUL';
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';

export class SendMessage implements Action {
  readonly  type = SEND_MESSAGE;

  constructor(public payload: Message) {}
}

export class SendMessageSuccess implements Action {
  readonly  type = SEND_MESSAGE_SUCCESS;
  constructor(public payload: Message) {}
}

export class SendMessageFail implements Action {
  readonly  type = SEND_MESSAGE_FAIL;
  constructor(public payload: HttpErrorResponse) {}
}

export class LoadMessages implements Action {
  readonly type = LOAD_MESSAGES;
  constructor(public payload: Message[]) {}
}

export type MessageActions = SendMessage | SendMessageSuccess | SendMessageFail | LoadMessages;
