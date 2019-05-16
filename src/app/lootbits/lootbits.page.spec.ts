import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootbitsPage } from './lootbits.page';

describe('LootbitsPage', () => {
  let component: LootbitsPage;
  let fixture: ComponentFixture<LootbitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootbitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootbitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
