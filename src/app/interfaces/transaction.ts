export interface ITransaction {
    TransactionId: string,
    Description: string,
    Amount: number,
    Debit: boolean,
    PostedDate: string,
    Account : string
}
