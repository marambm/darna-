import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvbComponent } from './cvb.component';

describe('CvbComponent', () => {
  let component: CvbComponent;
  let fixture: ComponentFixture<CvbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvbComponent]
    });
    fixture = TestBed.createComponent(CvbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
