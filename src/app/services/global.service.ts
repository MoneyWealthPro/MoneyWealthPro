import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
const routes = {
  welcome: ''
}
@Injectable({
  providedIn: 'root'
})

export class GlobalService extends BaseService<any> {

  constructor(private http: HttpClient) { 
    super(http)
  }
  // get api base url
  getWelcomeNote() {
   return this.sendGet(this.baseUrl(routes?.welcome));
  }
}
