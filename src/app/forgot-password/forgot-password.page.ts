import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { Platform} from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotPass: FormGroup;
  mobile : boolean;
  showLoad:boolean=false;
  email:boolean = false;

  constructor(private navCtrl: NavController,private platform:Platform, private route:Router, private userServices:UserService, private toastController:ToastController) { }

  hasError = (controlName: string, errorName: string) => {
    return this.forgotPass.controls[controlName].hasError(errorName);
}

  ngOnInit() {

    // Detecting Device Form Factor
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
    }
    
    // Forgot Password Form Group Definition
    this.forgotPass = new FormGroup({
      Email: new FormControl('',[Validators.required,Validators.email]),
    });
  }

  onemialTextInput(){
    this.email = true;
  }

  OnSubmitClick(){
    this.showLoad = true;
    let data = {
    LastName: '',
    Email: this.forgotPass.controls['Email'].value,
    }
    this.userServices.forgotPassword(data).subscribe(data=>{
      this.forgotPass.reset();
      this.showLoad = false;
      //this.route.navigate(['/thankyou'],{ queryParams: { resetPassword: 'successfullyreset' } });
      this.navCtrl.navigateRoot(['/thankyou'],{ queryParams: { resetPassword: 'successfullyreset' } })
      return false;
    },err=>{
      this.showLoad = false;
      this.presentToast(err.error.message);
    })
  }

  OnLoginClick(){
    //this.route.navigateByUrl('/auth');
    this.navCtrl.navigateRoot(['/auth']);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
