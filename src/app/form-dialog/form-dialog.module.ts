import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputErrorMsgComponent} from './input-error-msg.component';
import {FormValidationService} from './formValidation.service';
import {ReactiveFormsModule} from '@angular/forms';
import {UsedMaterialModule} from '../used-material.module';

@NgModule({
  imports: [
    CommonModule,
    UsedMaterialModule,
    ReactiveFormsModule,
  ],
  /* FormComponet is imported in items-list/items-list-module as a dialog */
  exports: [/*FormComponent*/ InputErrorMsgComponent, ReactiveFormsModule],
  declarations: [/*FormComponent*/ InputErrorMsgComponent],
  providers: [FormValidationService]
})
export class FormDialogModule {
}
