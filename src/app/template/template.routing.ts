import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template.component';
import { LayoutDetailComponent } from '../layout/layout-detail.component';

const templateRoute: Routes = [
  {
    path: '',
    component: LayoutDetailComponent,
    children: [
      {
        path: '',
        component: TemplateComponent

      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(templateRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateRouting { }
