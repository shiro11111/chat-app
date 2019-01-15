import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MessageService } from './message.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Message } from './models/message';
import { LoadMessagesFail, LoadMessagesSuccess, SendMessage, SendMessageSuccess } from './message.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class MessageEffects {
  constructor(private actions$: Actions,
              private service: MessageService) {
  }

  @Effect() sendMessage$ = this.actions$.pipe(
    ofType('SEND_MESSAGE'),
    map((action: SendMessage) => action.payload as Message),
    switchMap((payload: Message) => this.service.sendMessage(payload).pipe(
      map(() => new SendMessageSuccess())
    )));

 @Effect() loadMessages$ = this.actions$.pipe(
   ofType('LOAD_MESSAGES'),
   switchMap(() => this.service.loadMessages().pipe(
     map((res: Message[]) => (new LoadMessagesSuccess(res))),
     catchError((error: HttpErrorResponse) => of(new LoadMessagesFail(error)))
   ))
 );

}
