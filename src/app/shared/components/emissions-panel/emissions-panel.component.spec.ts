import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionsPanelComponent } from './emissions-panel.component';

describe('EmissionsPanelComponent', () => {
  let component: EmissionsPanelComponent;
  let fixture: ComponentFixture<EmissionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
