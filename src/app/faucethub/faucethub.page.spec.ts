import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaucethubPage } from './faucethub.page';

describe('FaucethubPage', () => {
  let component: FaucethubPage;
  let fixture: ComponentFixture<FaucethubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaucethubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaucethubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
