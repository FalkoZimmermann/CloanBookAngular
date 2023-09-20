import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorposalsComponent } from './porposals.component';

describe('PorposalsComponent', () => {
  let component: PorposalsComponent;
  let fixture: ComponentFixture<PorposalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorposalsComponent]
    });
    fixture = TestBed.createComponent(PorposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
