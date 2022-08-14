import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { EmissionsPanelComponent } from './components/emissions-panel/emissions-panel.component';
import { CodeDisplayComponent } from './components/code-display/code-display.component';


@NgModule({
  declarations: [
    EmissionsPanelComponent, 
    CodeDisplayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CodeDisplayComponent,
    MaterialModule
  ]
})
export class SharedModule { }