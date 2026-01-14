**Line 1:** `const { Connection } = solanaWeb3;`  
Extracts the `Connection` class from the Solana library to create a network connection.

**Line 2:** `const connection = new Connection('...', 'confirmed');`  
Creates an active connection object to the Solana blockchain using a CORS-proxied RPC URL.

**What's special about `Connection`:**  
It's your **gateway object**—all Solana data requests (balance, blocks, validators) go through its methods.

**Async function:**  
A function that can perform time-consuming tasks without freezing your page. **Useful here** because fetching blockchain data takes time.

**Try/catch:**  
Catches network errors, RPC failures, or timeouts—**prevents your app from crashing** if the connection fails.

**Epoch:**  
A ~2-day period in Solana used for staking rewards and voting calculations—**shows the network's current "season."**

**Await:**  
Pauses the function until `connection.getEpochInfo()` returns data—**ensures we have the epoch before logging it.**

**Slot height:**  
The current block number since genesis—**useful to confirm the connection is live and synced.**