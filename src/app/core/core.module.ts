import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { OperatorMenuComponent } from './operator-menu/operator-menu.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    OperatorMenuComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    RouterModule
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    OperatorMenuComponent
  ]
})
export class CoreModule { }
