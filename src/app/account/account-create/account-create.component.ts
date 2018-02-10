import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";
import {Account} from "../Account";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit, OnDestroy {

  id: number;
  account: Account;

  accountForm: FormGroup;
  private sub: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }



  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.accountForm = new FormGroup({
      accountName: new FormControl('', Validators.required),
      balance: new FormControl(0, Validators.required),

    });



  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.accountForm.valid) {

        let account: Account = new Account(null,
          this.accountForm.controls['accountName'].value,
          this.accountForm.controls['balance'].value);
        this.accountService.saveAccount(account).subscribe();
 
      
      this.router.navigate(['/accounts']);
  }
}

  redirectAccountPage() {
    this.router.navigate(['/accounts']);

  }

}
