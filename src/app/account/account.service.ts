import { Injectable } from '@angular/core';
import { Account } from "./Account";
import { Operation } from "./Operation";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
@Injectable()
export class AccountService {

  private apiUrl = 'http://localhost:8080/';
 
  constructor(private http: Http) {
  }
  findAll(): Observable<Account[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  findAllOps(id:number): Observable<Operation[]>  {
    return this.http.get(this.apiUrl + '/listops/'+id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Account> {
    return this.http.get(this.apiUrl + '/getAccount/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  opAccount(operation: Operation): Observable<Account> {
    return this.http.post(this.apiUrl+'/opAccount', operation)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
  }

  transferOpAccount(operation: Operation): Observable<Account> {
    return this.http.post(this.apiUrl+'/transferOpAccount', operation)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
  }

  saveAccount(account: Account): Observable<Account> {
    return this.http.post(this.apiUrl+'/createAccount', account)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
  }



  updateAccount(account: Account): Observable<Account> {
    return this.http.put(this.apiUrl+'/updateAccount', account)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
