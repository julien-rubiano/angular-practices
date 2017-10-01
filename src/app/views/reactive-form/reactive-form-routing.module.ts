import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleFormComponent } from './simple-form.component';
import { ComplexFormComponent } from './complex-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reactive Form'
    },
    children: [
      {
        path: 'simple-form',
        component: SimpleFormComponent,
        data: {
          title: 'Simple Form'
        }
      },
      {
        path: 'complex-form',
        component: ComplexFormComponent,
        data: {
          title: 'Complex Form'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule {}
