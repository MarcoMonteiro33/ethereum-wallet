import { ethers, Transaction } from 'ethers';
import { TransactionUnsigned } from './type';

export async function createUnsignedTransaction(txUnsigned: TransactionUnsigned): Promise<Transaction> {
    console.log("createUnsignedTransaction");
    const transactionUnsigned = ethers.Transaction.from(txUnsigned);
    console.log("Decode Transação não assinada:", transactionUnsigned.toJSON());


    console.log("Transação não assinada HEX:", JSON.stringify(transactionUnsigned.unsignedSerialized));
    console.log("Hash não assinado:", JSON.stringify(transactionUnsigned.unsignedHash));

    return transactionUnsigned;
}