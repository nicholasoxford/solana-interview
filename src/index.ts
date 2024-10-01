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
  console.log({ FROM_KEYPAIR: FROM_WALLET_KEYPAIR.publicKey.toBase58() });

  const connection = new Connection(RPC_URL);
  const { value } = await connection.getTokenAccountBalance(
    new PublicKey(FROM_WALLET_TOKEN_ACCOUNT)
  );

  console.log(value);
}

main();
