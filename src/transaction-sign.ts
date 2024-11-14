import { ethers, Transaction } from 'ethers';

export async function signTransaction(unsignedSerialized: string, unsignedHash: string, privateKey: string): Promise<Transaction> {

  console.log("signTransaction");

  const signingKey = new ethers.SigningKey(privateKey);

  const signature = signingKey.sign(unsignedHash);

  console.log("Assinatura da transação r:", signature.r);
  console.log("Assinatura da transação s:", signature.s);
  console.log("Assinatura da transação v:", signature.v);

  const tx = ethers.Transaction.from(unsignedSerialized);

  tx.signature = signature;

  console.log("Decode Transação Assinada:", tx.toJSON());
  console.log("Transação Assinada HEX:", tx.serialized);
  console.log("Hash Assinada:", tx.hash);

  return tx;
}