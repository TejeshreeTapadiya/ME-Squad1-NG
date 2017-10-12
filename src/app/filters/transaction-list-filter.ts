import { PipeTransform, Pipe } from '@angular/core';
import { ITransaction } from '../interfaces/transaction';

@Pipe({
    name : 'transactionFilter'
})
export class TransactionFilter implements PipeTransform {
    transform(value: ITransaction[], filterBy: string): ITransaction[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((transaction: ITransaction) =>
        transaction.Description.toLocaleLowerCase().indexOf(filterBy) !== -1 ) : value;
    }
}
