import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from '../../notify/alert.service';
import { LoadingService } from '../../notify/loading.service';
import { ToastService } from '../../notify/toast.service';

@Component({
  selector: 'app-summit-modal',
  templateUrl: './summit-modal.component.html',
  styleUrls: ['./summit-modal.component.scss'],
})
export class SummitModalComponent implements OnInit {
  summitCodeForm: FormGroup;
  passwordType = 'password';
  passwordShow = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.summitCodeForm = this.formBuilder.group({
      summitCode: ['', Validators.required]
    });
   }

  ngOnInit() {}

  async onSummitCodeForm() {
    const summitCode = this.summitCodeForm.value.summitCode.trim();

    // const data = {
    //   email,
    //   password
    // };

    const loading = await this.loadingService.presentLoading(
      'Verifying Code, Please Wait...', 'bubbles', 15000)
    .then(async () => {
      if (summitCode === 'summit2023') {
        this.loadingService.dismissLoading();
        await this.toastService.presentToast(
          'You Have Signed In Successfully!',
          'middle',
          [{
            text: 'OK',
            role: 'cancel',
            handler: () => {
              console.log('dismiss toast message');
              // this.router.navigate(['/home']);
            }
          }],
          3000
        );
      } else {
        this.loadingService.dismissLoading();
        await this.toastService.presentToast(
          'Sorry, The Code is Incorrect - A Special Code is Required to Access This Page',
          'middle',
          [{
            text: 'Click here to try again',
            role: 'cancel',
            handler: async () => {
              this.router.navigate(['/the-summit'])
                .then(() => {
                  window.location.reload();
                });
            }
          }],
          5000
        );
        // this.alertService.presentAlert(
        //   'Sorry, The Code is Incorrect',
        //   'A Special Code is Required to Access This Page',
        //   'Thank You',
        //   [{
        //       text: 'OK',
        //       cssClass: 'modal-button-primary',
        //       role: 'cancel',
        //       handler: async () => {
        //         this.router.navigate(['/the-summit'])
        //           .then(() => {
        //             window.location.reload();
        //           });
        //       }
        //     }
        //   ]
        // );
        this.router.navigate(['/home']);
      }
    }, async err => {
      this.loadingService.dismissLoading();
      await this.alertService.presentAlert(
        'Error','please try again', err.message, ['OK']
      );
    });
    this.summitCodeForm.reset();
    await this.modalCtrl.dismiss();
  }

  togglePassword() {
    if(this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  get summitCode() {
    return this.summitCodeForm.get('summitCode');
  }

  async closeModal() {
    await this.toastService.presentToast(
      'Contact Deva Joy For Instructions to Obtain a Code.',
      'middle',
      [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          // console.log('dismiss toast message');
        }
      }],
      3000
    );
    this.modalCtrl.dismiss();
    this.router.navigate(['/home']);
  }
}
