import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import {
  FROM_KEYPAIR,
  RPC_URL,
  SECRET_KEY,
  TOKEN_MINT_ADDRESS,
  FROM_WALLET_TOKEN_ACCOUNT,
  FROM_WALLET,
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
  console.log({ FROM_KEYPAIR: FROM_KEYPAIR.publicKey.toBase58() });

  const connection = new Connection(RPC_URL);
  const { value } = await connection.getTokenAccountBalance(
    new PublicKey(FROM_WALLET_TOKEN_ACCOUNT)
  );

  console.log(value);
}

main();
