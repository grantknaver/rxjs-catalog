import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';

const routes: Routes = [
  { path: '', component: MergeMapComponent },
  { path: 'mergmap', component: MergeMapComponent },
  { path: 'switchmap', component: SwitchMapComponent },
  { path: 'concatmap', component: ConcatMapComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransformationRoutingModule { }
