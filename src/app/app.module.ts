import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { OperatorMenuComponent } from './operators/operator-menu/operator-menu.component';
import { ConcatMapComponent } from './operators/transformation/concat-map/concat-map.component';
import { SharedModule } from './shared/shared.module';
import { MergeMapComponent } from './operators/transformation/merge-map/merge-map.component';
import { SwitchMapComponent } from './operators/transformation/switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorMenuComponent,
    ConcatMapComponent,
    MergeMapComponent,
    SwitchMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
