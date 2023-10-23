import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from  '../../models'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }
  validData() {
    const User : User = {
      email: this.form.value.Email,
      password: this.form.value.Password
    }

   //console.log(this.form);
   //console.log(User);

    if (User.password != '' && User.email != '') {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {

  }

}
