import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [AccountService]
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  constructor(private router: Router,
    private accountService: AccountService) { 
      this.getAccounts();
    }

  ngOnInit() {
    this.getAccounts();
  }


  ngOnChanges(){
    this.getAccounts();
  }
  getAccounts() {
    this.accountService.findAll().subscribe(
      accounts => {
        this.accounts = accounts;
      },
      err => {
        console.log(err);
      }
 
    );
  }

  ngOn
  redirectNewAccountPage() {
    this.router.navigate(['/accounts/create']);
  }

  opUserPage(account: Account){
    if (account) {
      this.router.navigate(['/accounts/op', account.id]);
    }
  }
  
  historyUserPage(account){
    if (account) {
      this.router.navigate(['/operations', account.id],{queryParams: {nameaccount: account.nameAccount},skipLocationChange: true});
    }
  }

}
