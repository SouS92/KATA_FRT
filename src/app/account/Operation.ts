export class Operation {
    from: number;
    to: number;
    amount: number;
    op: number;
    dateOperation: string;

    constructor(from: number, to: number, amount: number, operation: number, dateOp: Date){
        this.amount = amount;
        this.from = from;
        this.to = to;
        this.dateOperation = JSON.stringify(dateOp);
        this.op = operation;
    }
}