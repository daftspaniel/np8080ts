import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPanelComponent } from './toolbar-panel.component';

describe('ToolbarPanelComponent', () => {
  let component: ToolbarPanelComponent;
  let fixture: ComponentFixture<ToolbarPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
