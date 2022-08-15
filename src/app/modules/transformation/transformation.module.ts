import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransformationRoutingModule } from './transformation-routing.module';



@NgModule({
  declarations: [
    ConcatMapComponent,
    SwitchMapComponent,
    MergeMapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule { }
