import { parseEther, parseUnits } from "ethers";
import { createWallet } from "./create-wallet";
import { createUnsignedTransaction } from "./transaction-unsigned";
import { TransactionUnsigned } from "./type";
import { signTransaction } from "./transaction-sign";

async function singTransaction(){
    const walletFrom = await createWallet();
    console.log("walletFrom", walletFrom)
    const walletTo = await createWallet();
    console.log("walletTo", walletTo)

    const txUnsigned: TransactionUnsigned = {
        to: walletTo.address,
        value: parseEther("0.01"),
        gasLimit: 21000,
        gasPrice: parseUnits('10', 'gwei'),
        nonce: 0,
        chainId: 11155111,
        type: 0,
        data: '0x',
    }

    const transactionUnsigned = await createUnsignedTransaction(txUnsigned);
    await signTransaction(transactionUnsigned.unsignedSerialized, transactionUnsigned.unsignedHash, walletFrom.privateKey);
}

singTransaction();