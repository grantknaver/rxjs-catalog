import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IEPanelComponent } from './ie-panel.component';

describe('IEPanelComponent', () => {
  let component: IEPanelComponent;
  let fixture: ComponentFixture<IEPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IEPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IEPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
