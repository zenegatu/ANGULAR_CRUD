import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatCheckboxModule,
    MatDialogModule, MatTableModule, MatFormFieldModule, MatSortModule, MatPaginatorModule,
    MatMenuModule, MatToolbarModule, MatGridListModule, MatIconModule],

  exports: [MatButtonModule, MatCardModule, MatInputModule, MatCheckboxModule,
    MatDialogModule, MatTableModule, MatFormFieldModule, MatSortModule, MatPaginatorModule,
    MatMenuModule, MatToolbarModule, MatGridListModule, MatIconModule],
  declarations: []
})
export class UsedMaterialModule {
}
