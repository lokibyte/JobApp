import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  focused: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onBlurName(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  onBlurphone(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }
  
  onBlurOTP(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }
}