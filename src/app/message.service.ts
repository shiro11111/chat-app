import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from './models/message';


Injectable({
  providedIn: 'root'
});

const list: Message[] = [];

export class MessageService {

  loadMessages(): Observable<Message[]> {
    return of(list);
  }

  sendMessage(message: Message): any {
    list.push(message);
    return of(null);
  }

  deleteMessage(message: Message): any {
    if (list.indexOf(message) !== -1) {
      list.splice(list.indexOf(message), 1);
    }
    return of(null);
  }
}
