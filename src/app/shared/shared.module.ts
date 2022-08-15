import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { IEPanelComponent } from './components/ie-panel/ie-panel.component';
import { CodeDisplayComponent } from './components/code-display/code-display.component';


@NgModule({
  declarations: [
    IEPanelComponent, 
    CodeDisplayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CodeDisplayComponent,
    MaterialModule
  ]
})
export class SharedModule { }