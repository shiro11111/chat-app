import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { select, Store } from '@ngrx/store';
import { LoadMessages } from '../message.actions';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageState } from '../message.reducers';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  list$: Observable<Message[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.store.dispatch(new LoadMessages());

    this.list$ = this.store.pipe(select('messageState')).pipe(
      map((state: MessageState) => state && state.list));
  }
}
