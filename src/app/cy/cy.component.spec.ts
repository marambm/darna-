import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyComponent } from './cy.component';

describe('CyComponent', () => {
  let component: CyComponent;
  let fixture: ComponentFixture<CyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyComponent]
    });
    fixture = TestBed.createComponent(CyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
