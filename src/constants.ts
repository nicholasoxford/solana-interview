import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export const SECRET_KEY = "GET_SECRET_KEY";
export const FROM_KEYPAIR = Keypair.fromSecretKey(bs58.decode(SECRET_KEY));

export const TOKEN_MINT_ADDRESS =
  "HpQBBg3qfTnugmbMz3gsUmY7pGskXvCUhy3asuW5DvMc";
export const FROM_WALLET_TOKEN_ACCOUNT =
  "Ed1Hhj5Gon3W8i27Bk35D5gSJLPjwrSuqiyJjYRp41uQ";
export const FROM_WALLET = "G7AtMpyiNJv4VQfNfCd7DYvVcAhU5uN7u1Bq5CxxSyUz";
export const TO_WALLET = "MTUSAg1e8Uu9XjSsTQs7pkfNU8FUZhQGDYExE6Xzpxc";
export const AMOUNT = 10_000;

export const RPC_URL = "GET_RPC_URL";
