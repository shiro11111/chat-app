import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { SendMessage } from '../store/message.actions';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      content: null,
      timestamp: null,
      author: null
    });
  }

  onSubmit(): void {
    const payload = {
      ...this.form.value,
      timestamp: new Date()
    };
    this.store.dispatch(new SendMessage(payload));
    this.form.get('content').setValue(null);
  }
}
