import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompproductsComponent } from './compproducts.component';

describe('CompproductsComponent', () => {
  let component: CompproductsComponent;
  let fixture: ComponentFixture<CompproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
