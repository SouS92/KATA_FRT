export class Account{
    id:number;
    accountName: string;
    balance: number;
    constructor(id: number, accountName: string, balance: number){
        this.id = id; 
        this.accountName = accountName;
        this.balance = balance;
    }
}