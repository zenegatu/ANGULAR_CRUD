import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsListComponent} from './items-list.component';

import {UsedMaterialModule} from '../used-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormDialogModule} from '../form-dialog/form-dialog.module';
import {FormDialogComponent} from '../form-dialog/form-dialog.component';

@NgModule({
  imports: [
    FormDialogModule,
    UsedMaterialModule,
    FlexLayoutModule,
    CommonModule
  ],
  /* FormComponent from 'form' folder to be used as dialog */
  exports: [ItemsListComponent],
  declarations: [ItemsListComponent, FormDialogComponent],
  entryComponents: [FormDialogComponent]
})
export class ItemsListModule {

}
