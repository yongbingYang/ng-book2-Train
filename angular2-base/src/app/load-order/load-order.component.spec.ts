import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadOrderComponent } from './load-order.component';

describe('LoadOrderComponent', () => {
  let component: LoadOrderComponent;
  let fixture: ComponentFixture<LoadOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
