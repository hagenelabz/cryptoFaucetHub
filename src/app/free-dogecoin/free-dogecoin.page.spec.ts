import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDogecoinPage } from './free-dogecoin.page';

describe('FreeDogecoinPage', () => {
  let component: FreeDogecoinPage;
  let fixture: ComponentFixture<FreeDogecoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeDogecoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDogecoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
