import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {


  //private user:  Observable<any>;
  private alert;
  email: string = ""
  password: string = ""
  // cpassword: string = ""
  public option: string
  public emailForm: FormGroup;



  public emailPasswordForm: FormGroup;

  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minLength', message: 'Email length must be longer or equal to 6 character.' },
      { type: 'maxLength', message: 'Email length must be lower or equal to 50 character.' },
      { type: 'pattern', message: 'Please enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minLength', message: 'password length must be longer or equal to 6 character.' },
      { type: 'maxLength', message: 'password length must be lower or equal to 30 character.' },
      { type: 'pattern', message: 'Please enter a valid password' }
    ],
  }


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private nav: NavController,
  ) {
    this.emailPasswordForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9!@#$%^&*()_+-=]*$')

      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')

      ]))
    });
  }

  ngOnInit(): void {

  }

  login() {
    this.router.navigateByUrl('/tabs')
  }

  back() {
    this.nav.pop();
  }




}
