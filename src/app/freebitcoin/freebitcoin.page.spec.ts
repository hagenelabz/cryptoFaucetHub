import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreebitcoinPage } from './freebitcoin.page';

describe('FreebitcoinPage', () => {
  let component: FreebitcoinPage;
  let fixture: ComponentFixture<FreebitcoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreebitcoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreebitcoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
