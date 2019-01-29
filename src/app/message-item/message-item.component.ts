import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { DeleteMessage } from '../store/message.actions';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message: Message;
  @Input() author;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  deleteMessage(): void {
    this.store.dispatch(new DeleteMessage(this.message));
  }

}
