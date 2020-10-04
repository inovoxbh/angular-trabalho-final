import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorsPageComponent } from './constructors-page.component';

describe('ConstructorsPageComponent', () => {
  let component: ConstructorsPageComponent;
  let fixture: ComponentFixture<ConstructorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
