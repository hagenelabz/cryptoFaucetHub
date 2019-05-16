import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedogecoinPage } from './freedogecoin.page';

describe('FreedogecoinPage', () => {
  let component: FreedogecoinPage;
  let fixture: ComponentFixture<FreedogecoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreedogecoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreedogecoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
