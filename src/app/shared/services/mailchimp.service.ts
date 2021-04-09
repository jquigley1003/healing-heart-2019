import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// const CORS = " https://cors-anywhere.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {
  
  allCampaigns = [];

  constructor(private afFunctions: AngularFireFunctions) {}

  getMailChimpNewsLetters() {
    const callable = this.afFunctions.httpsCallable('getNewsletters');
    const newsletters = callable({});

    return newsletters;
      
    
    // console.log('mailchimp service response: ',this.newsletters$)

    // newsletters.then(resp => {
    //   console.log('mailchimp service response: ',resp);
    //   return resp;
    // });
    
  }

}