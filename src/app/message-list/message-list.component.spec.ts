import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../app.reducers';
import { LoadMessages } from '../message.actions';
import { first } from 'rxjs/operators';


describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListComponent ],
      imports: [StoreModule.forRoot(reducers),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load message list', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadMessages());
    component.list$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
  });
});
