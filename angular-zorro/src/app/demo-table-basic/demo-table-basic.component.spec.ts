import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTableBasicComponent } from './demo-table-basic.component';

describe('DemoTableBasicComponent', () => {
  let component: DemoTableBasicComponent;
  let fixture: ComponentFixture<DemoTableBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTableBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
