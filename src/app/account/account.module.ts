import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import {AccountService} from './account.service';
import { AccountOpComponent } from './account-op/account-op.component'
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountService],
  declarations: [AccountListComponent, AccountCreateComponent, AccountOperationsComponent, AccountOpComponent]
})
export class AccountModule { }
