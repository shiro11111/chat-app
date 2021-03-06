import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatRadioModule } from '@angular/material';
import { AppState, reducers } from '../app.reducers';
import { Store, StoreModule } from '@ngrx/store';
import { SendMessage } from '../store/message.actions';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have created form', () => {
    expect(component.form).toBeDefined();
  });

  it('should send message', () => {
    const dateMock: Date = new Date();
    component.form.patchValue({ timestamp: dateMock });
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(new SendMessage(component.form.value));
  });
});
