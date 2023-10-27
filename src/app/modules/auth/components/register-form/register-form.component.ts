import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '../../../../utils/validators';
import { RequestStatus } from 'src/app/models/request-status.model';
import { AuthService } from 'src/app/services/auth.service';

interface IsAvailable {
  isAvailable: boolean;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  formUser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  form = this.formBuilder.nonNullable.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('password', 'confirmPassword'),
      ],
    }
  );

  status: RequestStatus = 'init';
  statusUser: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showRegister = false;
  showOtherRegister = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      this.authService.register(name, email, password).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.status = 'failed';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  validateUser() {
    if (this.formUser.valid) {
      this.status = 'loading';
      const { email } = this.formUser.getRawValue();
      this.authService.isAvailable(email).subscribe({
        next: (rta: any) => {
          this.statusUser = 'success';
          console.log(rta.isAvailable);
          if (rta.isAvailable) {
            this.form.controls.email.setValue(email);
            this.showRegister = true;
          } else {
            this.router.navigate(['/login'], {
              queryParams: { email },
            });
          }
        },
        error: (error) => {
          this.status = 'failed';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
