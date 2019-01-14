import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from './models/message';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

const list: Message[] = [];

export class MessageService {

  loadMessages(): Observable<Message[]> {
    return of(list);
  }

  sendMessage(message: Message): null {
    list.push(message);
    return null;
  }
}
