// 1. Connect to Solana RPC
const { Connection } = solanaWeb3;
const connection = new Connection('https://corsproxy.io/?https://api.mainnet-beta.solana.com', 'confirmed');


// 2. Fetch and log basic network info
async function logNetworkInfo() {
    try {
        const epochInfo = await connection.getEpochInfo();
        console.log('✅ Connected to Solana Mainnet');
        console.log('Current epoch:', epochInfo.epoch);
        console.log('Slot height:', epochInfo.slotIndex);
    } catch (error) {
        console.error('❌ Connection failed:', error);
    }   
}

// 3. Run it
logNetworkInfo();