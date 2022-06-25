import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
const routes = {
  welcome: '',
  registerWithEmail: 'api/v1/registerWithEmail',
  loginWithEmail: "api/v1/loginWithEmail",
  userInformation: "api/v1/loggedInUserDetails",
  registerWithCode: "ap1/v1/registerWithReferral",
  get_investments: "api/v1/user/plans",
  get_latest: "api/v1/user/latestDepositWithdraw"
}
@Injectable({
  providedIn: 'root'
})

export class GlobalService extends BaseService<any> {

  constructor(private http: HttpClient) { 
    super(http)
  }
  public userData: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public modalSidebarClass: BehaviorSubject<any> = new BehaviorSubject<any>('');
  // get api base url
  getWelcomeNote() {
   return this.sendGet(this.baseUrl(routes?.welcome));
  }
  // register with email
  registerWithEmail(payload: any) {
    return this.sendPost(this.baseUrl(routes?.registerWithEmail), payload);
  }
  // register with referral code
  registerWithCode(payload: any) {
    return this.sendPost(this.baseUrl(routes?.registerWithCode), payload);
  }
  // register with email
  loginWithEmail(payload: any) {
      return this.sendPost(this.baseUrl(routes?.loginWithEmail), payload);
  }
  userDetails() {
    return this.sendGet(this.baseUrl(routes?.userInformation));
  }

  // profile endpoints
  getInvestments() {
    return this.sendGet(this.baseUrl(routes?.get_investments));
  }
  getLatest() {
    return this.sendGet(this.baseUrl(routes?.get_latest));
  }
}
