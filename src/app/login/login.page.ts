import { Component, OnInit } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,public modalController: ModalController,public toastController: ToastController) {  }
  focused: boolean = false;
  ngOnInit() {
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
  doLogin(){
    console.info("doLogin($event)");
    this.router.navigate(['/home/main']);
  }
}
