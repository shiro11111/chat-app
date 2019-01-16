import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemComponent } from './message-item.component';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../app.reducers';

describe('MessageItemComponent', () => {
  let component: MessageItemComponent;
  let fixture: ComponentFixture<MessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageItemComponent ],
      imports: [ MatCardModule,
      StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
