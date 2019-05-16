import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitnyxPage } from './bitnyx.page';

describe('BitnyxPage', () => {
  let component: BitnyxPage;
  let fixture: ComponentFixture<BitnyxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitnyxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitnyxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
