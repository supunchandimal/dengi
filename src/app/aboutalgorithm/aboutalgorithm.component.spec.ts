import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutalgorithmComponent } from './aboutalgorithm.component';

describe('AboutalgorithmComponent', () => {
  let component: AboutalgorithmComponent;
  let fixture: ComponentFixture<AboutalgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutalgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutalgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
