import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MessageService } from './message.service';
import { map, switchMap } from 'rxjs/operators';
import { Message } from './models/message';
import { LoadMessages, SendMessage, SendMessageFail, SendMessageSuccess } from './message.actions';

@Injectable()
export class MessageEffects {
  constructor(private actions$: Actions,
              private service: MessageService) {
  }

  @Effect() sendMessage$ = this.actions$.pipe(
    ofType('SEND_MESSAGE'),
    map((action: SendMessage) => action.payload as Message),
    switchMap((payload: Message) => this.service.sendMessage(payload)));

  @Effect() loadMessages$ = this.actions$.pipe(
    ofType('LOAD_MESSAGES'),
    map((action: LoadMessages) => action.payload as Message[]),
    switchMap((payload: Message[]) => this.service.loadMessages()));

}
