import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Operation } from '../Operation';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit,OnDestroy {


  operations: Operation[];
  id: number;

  nameAcc: any;
  private sub: any;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.sub = this.route.queryParams.subscribe(params => {
      this.nameAcc = params['nameaccount'];

    });
    this.getOperations();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getOperations() {
    this.accountService.findAllOps(this.id).subscribe(
      ops => {
        this.operations = ops;
      },
      err => {
        console.log(err);
      }
    );
  }
  
  redirectAccountPage() {
    this.router.navigate(['/accounts']);

  }

}
