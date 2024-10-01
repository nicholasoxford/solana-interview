import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import {
  RPC_URL,
  FROM_WALLET,
  FROM_WALLET_KEYPAIR,
  FROM_WALLET_TOKEN_ACCOUNT,
  TOKEN_MINT_ADDRESS,
  TO_WALLET,
  AMOUNT,
} from "./constants";

// TASK:
// 1. Transfer AMOUNT of spl-token TOKEN_MINT_ADDRESS from FROM_WALLET to TO_WALLET
// 2. Use any library or helpers you want
// Tips: Token has 8 decimals, priority fees??
// run:
// npm run install
// npm run start
// Bonus points for using http calls instead of solely @solana/web3.js and similar libraries

async function main() {
  const connection = new Connection(RPC_URL);
  const { value } = await connection.getTokenAccountBalance(
    new PublicKey(FROM_WALLET_TOKEN_ACCOUNT)
  );

  const fromWalletPublicKey = FROM_WALLET_KEYPAIR.publicKey.toBase58();
  const tokenMintAddress = TOKEN_MINT_ADDRESS;
  const balance = `${value.uiAmount} ${tokenMintAddress}`;

  console.log("\n=== Wallet and Token Information ===\n");
  console.log(`From Wallet Public Key: ${fromWalletPublicKey}`);
  console.log(`Token Mint Address:     ${tokenMintAddress}`);
  console.log(`Token Account Balance:  ${balance}`);
  console.log("\n=====================================\n");
}

main().catch((err) => {
  console.error("Error running the main function:", err);
});
