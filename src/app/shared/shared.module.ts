import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { EmissionsPanelComponent } from './components/emissions-panel/emissions-panel.component';


@NgModule({
  declarations: [EmissionsPanelComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }