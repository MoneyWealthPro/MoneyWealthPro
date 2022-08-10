import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


const routes = {
  getAllWithdraw: "api/v1/admin/withdraws",
  getAllInvestment: "api/v1/admin/investments",
  getAllDeposit: "api/v1/admin/deposits",
  getAllUser: "api/v1/admin/getAllUsers",

  approve_deposit: "api/v1/admin/approveDeposit",
  decline_deposit: "api/v1/admin/cancelDeposit",
  delete_deposit: "api/v1/admin/deleteDeposit",

  approve_withdraw: "api/v1/admin/approveWithdraw",
  decline_withdraw: "api/v1/admin/declineWithdraw",
  user_to_moderator: "api/v1/admin/userToModerator"
}
@Injectable({
  providedIn: 'root'
})
export class AdminService extends BaseService<any> {

  constructor(private http: HttpClient) { 
    super(http)
  }

    getAllWithdraw() {
      return this.sendGet(this.baseUrl(routes?.getAllWithdraw));
    }
    getAllInvestment() {
      return this.sendGet(this.baseUrl(routes?.getAllInvestment));
    }
    getAllDeposit() {
      return this.sendGet(this.baseUrl(routes?.getAllDeposit));
    }

    getAllUsers() {
      return this.sendGet(this.baseUrl(routes?.getAllUser));
    }

    approve_deposit(item: any) {
      return this.sendGet(this.baseUrl(`${routes?.approve_deposit}/${item}`));
    }

    decline_deposit(item: any) {
      return this.sendGet(this.baseUrl(`${routes?.decline_deposit}/${item}`));
    }


    delete_deposit(item: any) {
      return this.sendDelete(this.baseUrl(`${routes?.delete_deposit}/${item}`));
    }

    approve_withdraw(item: any) {
      return this.sendGet(this.baseUrl(`${routes?.approve_withdraw}/${item}`));
    }

    decline_withdraw(item: any) {
      return this.sendGet(this.baseUrl(`${routes?.decline_withdraw}/${item}`));
    }

    
    user_to_moderator(item: any) {
      return this.sendGet(this.baseUrl(`${routes?.user_to_moderator}/${item}`));
    }


}
