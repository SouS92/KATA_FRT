import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpComponent } from './account-op.component';

describe('AccountOpComponent', () => {
  let component: AccountOpComponent;
  let fixture: ComponentFixture<AccountOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
