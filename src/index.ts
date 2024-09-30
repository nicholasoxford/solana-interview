import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import {
  FROM_KEYPAIR,
  RPC_URL,
  SECRET_KEY,
  TOKEN_MINT_ADDRESS,
  TOKEN_ACCOUNT_ADDRESS,
  FROM_WALLET,
  TO_WALLET,
  AMOUNT,
} from "./constants";

// TASK:
// 1. Transfer AMOUNT of spl-token TOKEN_MINT_ADDRESS from FROM_WALLET to TO_WALLET
// 2. Use any library or helpers you want
// 3. Bonus points for using http calls to send and confirm transactions
// Tips: Token has 8 decimals, priority fees??
// run npm run install && npm run start

async function main() {
  console.log({ FROM_KEYPAIR: FROM_KEYPAIR.publicKey.toBase58() });

  const connection = new Connection(RPC_URL);
  const { value } = await connection.getTokenAccountBalance(
    new PublicKey(TOKEN_ACCOUNT_ADDRESS)
  );

  console.log(value);
}

main();
