import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '../layout/layout.module';
import { DashboardRouting } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    LayoutModule,
    DashboardRouting
  ],
  exports: [ DashboardComponent]
})

export class DashboardModule {}
