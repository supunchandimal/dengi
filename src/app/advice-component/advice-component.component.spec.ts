import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceComponentComponent } from './advice-component.component';

describe('AdviceComponentComponent', () => {
  let component: AdviceComponentComponent;
  let fixture: ComponentFixture<AdviceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
