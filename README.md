# Solana Token Transfer

A TypeScript project demonstrating SPL token transfers on Solana.

## Setup

1. Clone and install dependencies:

   ```bash
   git clone https://github.com/your-username/solana-token-transfer.git
   cd solana-token-transfer
   npm install
   ```

2. Configure `src/constants.ts`:

   ```typescript
   export const SECRET_KEY = "ask-for-secret-key";
   export const TOKEN_MINT_ADDRESS = "your-token-mint";
   export const TOKEN_ACCOUNT_ADDRESS = "your-token-account";
   export const FROM_WALLET = "sender-wallet";
   export const TO_WALLET = "receiver-wallet";
   export const AMOUNT = 10_000;
   export const RPC_URL = "ask-for-rpc-url";
   ```

3. Run the transfer:
   ```bash
   npm start
   ```
