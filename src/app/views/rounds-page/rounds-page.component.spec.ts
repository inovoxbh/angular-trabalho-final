import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsPageComponent } from './rounds-page.component';

describe('RoundsPageComponent', () => {
  let component: RoundsPageComponent;
  let fixture: ComponentFixture<RoundsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
