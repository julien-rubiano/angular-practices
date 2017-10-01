import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SimpleFormComponent } from './simple-form.component';
import { ComplexFormComponent } from './complex-form.component';

// Components Routing
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormRoutingModule],
  declarations: [SimpleFormComponent, ComplexFormComponent]
})
export class ReactiveFormModule {}
