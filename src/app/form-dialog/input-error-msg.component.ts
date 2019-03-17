import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormValidationService} from './formValidation.service';

@Component({
  selector: 'app-input-error-msg',
  template: `
    <div *ngIf="errorMsg != null">{{errorMsg}}</div>`,
  styles: []
})
export class InputErrorMsgComponent {

  @Input() cntrl: FormControl;

  constructor(private validationService: FormValidationService) {
  }

  get errorMsg() {
    for (const errorName in this.cntrl.errors) {
      if (this.cntrl.errors.hasOwnProperty(errorName) && this.cntrl.touched) {
        return this.validationService.getErrMsg(errorName, this.cntrl.errors[errorName]);
      }
    }
    return null;
  }
}
