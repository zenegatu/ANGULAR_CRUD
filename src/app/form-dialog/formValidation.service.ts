import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class FormValidationService {

  constructor() {
  }

  getErrMsg(validatorName: string, validatorValue ?: any) {
    const config = {
      'required': 'Required',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'maxlength': `Minimum length ${validatorValue.requiredLength}`,
      'validateEmail': 'Invalid email address',
    };
    return config[validatorName];
  }

  emailValidator(control: AbstractControl) {
    /*http://emailregex.com*/
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(control.value) ? null : {'validateEmail': false};
  }


}
