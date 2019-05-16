import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinpotPage } from './coinpot.page';

describe('CoinpotPage', () => {
  let component: CoinpotPage;
  let fixture: ComponentFixture<CoinpotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinpotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinpotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
