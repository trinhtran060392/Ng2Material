import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { LayoutComponent } from './layout.component';
import { LayoutDetailComponent } from './layout-detail.component';

@NgModule({
  declarations: [
    LayoutComponent, LayoutDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule
  ],
  exports: [ LayoutComponent, LayoutDetailComponent]
})

export class LayoutModule {}
