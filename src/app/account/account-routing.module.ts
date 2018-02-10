import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import { AccountOpComponent } from './account-op/account-op.component';

const routes: Routes = [
{path:'accounts',component:AccountListComponent},
{path:"accounts/create",component:AccountCreateComponent},
{path:'accounts/edit/:id',component:AccountCreateComponent},
{path:'accounts/op/:id',component:AccountOpComponent},
{path:'operations/:id',component:AccountOperationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
