import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { FormComponent } from './form/form.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatRadioModule } from '@angular/material';
import { MessageItemComponent } from './message-item/message-item.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        FormComponent,
        MessageListComponent,
        MessageItemComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chat-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('chat-app');
  });

});
