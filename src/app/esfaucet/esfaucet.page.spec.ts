import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsfaucetPage } from './esfaucet.page';

describe('EsfaucetPage', () => {
  let component: EsfaucetPage;
  let fixture: ComponentFixture<EsfaucetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsfaucetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsfaucetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
