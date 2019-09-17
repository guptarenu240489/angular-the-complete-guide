import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['test', 'user'];

  constructor() {
    console.log('const');
  }
  ngOnInit() {
    console.log('init');
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbbidenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female')
    });
    // hooks to subscribe to any value change
    this.signupForm.valueChanges.subscribe(
      value => console.log(value)
    )
    // hook to subscribe to any status change in form
    this.signupForm.statusChanges.subscribe(
      status => console.log(status)
    )
    // hook to listen to value change on particular field
    this.signupForm.get('userData.username').valueChanges.subscribe(
      status => console.log(status)
    )
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbbidenNames (control: FormControl) : {[s: string]: boolean} {
    if(this.forbiddenUserNames && this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }
}
