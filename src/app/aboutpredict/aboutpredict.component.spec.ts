import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpredictComponent } from './aboutpredict.component';

describe('AboutpredictComponent', () => {
  let component: AboutpredictComponent;
  let fixture: ComponentFixture<AboutpredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
