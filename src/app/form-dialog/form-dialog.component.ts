import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidationService} from './formValidation.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IPerson} from '../core/iperson';

/* FormComponet is imported in items-list/items-list-module to be used  as a dialog */
@Component({
  selector: 'app-form',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.omponent.css']
})
export class FormDialogComponent {

  @Output() onAddItem: EventEmitter<IPerson> = new EventEmitter();
  @Output() onDeleteItems: EventEmitter<boolean> = new EventEmitter();

  form: FormGroup;
  formTitle: string;
  showForm = true;
  selectedItemsCount: number;
  formMsg = '';
  isWarning = false;

  constructor(@Inject(FormBuilder) private fb: FormBuilder,
              private validationService: FormValidationService,
              public dialogRef: MatDialogRef<FormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IPerson) {
    this.creatForm();
  }

  closeForm() {
    this.dialogRef.close();
  }

  creatForm() {
    this.form = this.fb.group({
      id: [],
      firstname: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],

      email: ['', [Validators.required,
        Validators.maxLength(30),
        Validators.minLength(6), this.validationService.emailValidator]],
    });
  }

  submitForm(f: FormGroup) {
    this.onAddItem.emit(f.value);
  }

  sureDelete() {
    this.onDeleteItems.emit(true);
    this.dialogRef.close();
  }

  populateForm(person: IPerson) {
    this.form.setValue(person, {onlySelf: true});
  }

  onFocus() {
    this.formMsg = '';
  }

  clearInput(inputName: string) {
    const fc = this.form.controls[inputName];
    fc.setValue(null);
    this.formMsg = '';
  }
}
