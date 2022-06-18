import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


const routes = {
  invest_in_packages: "api/v1/user/subcribeToInvestment",
  get_investments: "api/v1/user/investment/list",
  my_investments: "api/v1/user/investmentSubcribedTo",
  change_password: "api/v1/changePassword",
  update_profile: "api/v1/updateProfile",
  upload_story: "api/v1/user/uploadAStory",

  address: "api/v1/user/address",

  deposit: "api/v1/user/deposit",
  mydeposits: "api/v1/user/mydeposits",
  myreferrals: "api/v1/referredList",
  my_withdraw: "api/v1/user/my_withdrawals",
  withdraw: "api/v1/user/withdraw"
}

@Injectable({
  providedIn: 'root'
})

export class ProfileService extends BaseService<any> {

  constructor(private http: HttpClient) { 
    super(http)
  }
  // Get investment list
  investFunds(payload: any) {
    return this.sendPost(this.baseUrl(routes?.invest_in_packages), payload);
  }
  getInvestments() {
    return this.sendGet(this.baseUrl(routes?.get_investments));
  }
  myinvestments() {
    return this.sendGet(this.baseUrl(routes?.my_investments));
  }
  mywithdrawals() {
    return this.sendGet(this.baseUrl(routes?.my_withdraw));
  }
  withdraw(payload: any) {
    return this.sendPost(this.baseUrl(routes?.withdraw), payload);
  }
  changePassword(payload: any) {
    return this.sendPost(this.baseUrl(routes?.change_password), payload);
  }
  updateProfile(payload: any) {
    return this.sendPatch(this.baseUrl(routes?.update_profile), payload);
  }
  uploadStory(payload: any) {
    return this.sendPost(this.baseUrl(routes?.upload_story), payload);
  }
  // Address 
  getAddress() {
    return this.sendGet(this.baseUrl(routes?.address));
  }
  myreferrals() {
    return this.sendGet(this.baseUrl(routes?.myreferrals));
  }

  // Deposit section
  deposit(payload: any) {
    return this.sendPost(this.baseUrl(routes?.deposit), payload);
  }
  mydeposits() {
    return this.sendGet(this.baseUrl(routes?.mydeposits));
  }
 }
