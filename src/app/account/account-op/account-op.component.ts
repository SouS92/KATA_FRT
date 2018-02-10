import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";
import {Account} from "../Account";
import {ActivatedRoute, Router} from '@angular/router';
import { Operation } from '../Operation';


@Component({
  selector: 'app-account-op',
  templateUrl: './account-op.component.html',
  styleUrls: ['./account-op.component.css']
})
export class AccountOpComponent implements OnInit {

  id: number;
  account: Account;
  nameAcc: any;
  ops: any[];
  public accounts: Account[];
  accountForm: FormGroup;
  private sub: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

              
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
    this.ops =  [
      { id: 0, name: 'Withdraw'},
      { id: 1, name: 'Deposit'},
      { id: 2, name: 'Transfer'}
  ];
    this.accountForm = new FormGroup({
      balance: new FormControl(0, Validators.required),
      op: new FormControl(0, Validators.required),
      toAccount: new FormControl(0, ),

    });
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.findAll().subscribe(
      accountsList => {

        for(let acc  of accountsList ){
          if(acc.id == this.id){
            let ac: any = acc;
            this.nameAcc = ac.nameAccount;
          }

              }
        this.accounts = accountsList.filter((c: Account) => c.id !=this.id);
      },
      err => {
        console.log(err);
      }
 
    );
  }




  onSubmit() {
    if (this.accountForm.valid) {

      let op = this.accountForm.controls['op'].value;

      let operation: Operation = new Operation(this.id,this.accountForm.controls['toAccount'].value,
      this.accountForm.controls['balance'].value,this.accountForm.controls['op'].value,new Date());
      
      if(op != 2)
      this.accountService.opAccount(operation).subscribe();
      else
      this.accountService.transferOpAccount(operation).subscribe();

      this.router.navigate(['/accounts']);
  }
}

  redirectAccountPage() {
    this.router.navigate(['/accounts']);

  }



}
