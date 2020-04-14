import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthComponent } from './testh.component';

describe('TesthComponent', () => {
  let component: TesthComponent;
  let fixture: ComponentFixture<TesthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
