import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BAUComponent } from './bau.component';

describe('BAUComponent', () => {
  let component: BAUComponent;
  let fixture: ComponentFixture<BAUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BAUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
