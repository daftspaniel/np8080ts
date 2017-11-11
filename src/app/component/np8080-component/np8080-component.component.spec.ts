import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Np8080ComponentComponent } from './np8080-component.component';

describe('Np8080ComponentComponent', () => {
  let component: Np8080ComponentComponent;
  let fixture: ComponentFixture<Np8080ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Np8080ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Np8080ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
