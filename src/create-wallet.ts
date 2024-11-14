import { ethers, HDNodeWallet } from 'ethers';

export async function createWallet(): Promise<HDNodeWallet> {
  console.log("createWallet");
  const wallet = ethers.Wallet.createRandom();

  console.log('Endereço:', wallet.address);
  console.log('Chave Privada:', wallet.privateKey);
  console.log('Mnemonic:', wallet.mnemonic?.phrase);

  return wallet;
}