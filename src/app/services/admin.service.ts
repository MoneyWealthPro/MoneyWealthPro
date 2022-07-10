import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


const routes = {
  getAllWithdraw: "api/v1/admin/withdraws",
  getAllInvestment: "api/v1/admin/investments",
  getAllDeposit: "api/v1/admin/deposits"
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

}
