import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { toastEnter } from 'src/app/toastAnimation/toast';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  userDetails = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
  }

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
    'cpassword': [
      { type: 'required', message: 'password is no match.' },
      { type: 'minLength', message: 'password length must be longer or equal to 6 character.' },
      { type: 'maxLength', message: 'password length must be lower or equal to 30 character.' },
      { type: 'pattern', message: 'Please enter a comfirm password' }
    ],
  }

  public option: string
  public emailPasswordForm: FormGroup;


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastController,
    private nav: NavController
  ) {

    this.emailPasswordForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9!@#$%^&*()_+-=]*$')

      ])),
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),

      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),

      ])),
      //for the comfirm password
      cpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9!@#$%^&*()_+-=]*$')
      ])),

      // for the email requrire
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')

      ]))
    });
  }

  ngOnInit() {
  }
  signUp() {

    this.register(this.userDetails)
  }
  async register(userDetails) {
    if (userDetails.password !== userDetails.cpassword) {
      //showing the toast notification
      this.toastAlert()
    } else if (userDetails.password == userDetails.cpassword) {
      this.router.navigateByUrl('/tabs')
    }
  }

  async toastAlert() {
    const toast = await this.toast.create({
      header: 'Error',
      message: "Hi, Your password don't match",
      duration: 400,
      position: 'top',
      enterAnimation: toastEnter,
    })
    toast.present();

  }

  back() {
    this.nav.pop();
  }

}
