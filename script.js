// 1. Connect to Solana RPC
const { Connection } = solanaWeb3;
const connection = new Connection('https://corsproxy.io/?https://api.mainnet-beta.solana.com', 'confirmed');

const validatorVoteAddress = 'SLaYv7tCwetrFGbPCRnqpHswG5qqKino78EYpbGF7xY';

// 2. Fetch and log basic network info
async function logNetworkInfo() {
    try {
        const epochInfo = await connection.getEpochInfo();
        console.log('✅ Connected to Solana Mainnet');
        console.log('Current epoch:', epochInfo.epoch);
        console.log('Slot height:', epochInfo.slotIndex);

        console.log('✅ Epoch:', epochInfo.epoch);

        const voteAccounts = await connection.getVoteAccounts();
        
        // Search current & delinquent
        const all = [...voteAccounts.current, ...voteAccounts.delinquent];
        const validator = all.find(acc => acc.votePubkey === validatorVoteAddress);
        
        if (validator) {
            console.log('📊 Validator found:', validator);
        } else {
            console.log('❌ Not found');
        }
    } catch (error) {
        console.error('❌ Connection failed:', error);
    }   
}

// 3. Run it
logNetworkInfo();