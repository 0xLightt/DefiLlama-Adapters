const { sumTokens2 } = require('../helper/solana')

const DROP = 'DropTpWcDmP7kVRUEoKSJaMVi62hGo9jp19Hz19JVsjh';
const PARIMUTUEL_WALLET = 'DCa1Xir4zDEtz78beFcXCHUNXdeBnrxBiRuuapHrBE3F';
const PARIMUTUEL_ACCOUNT = 'mD62sAqPAiVbHGPTTeEianTYa1AytkKqqcxMvQxF3S3';

async function tvl() {
    return sumTokens2({ owner: PARIMUTUEL_WALLET, getAllTokenAccounts: true, solOwners: [PARIMUTUEL_WALLET], blacklistedTokens: [DROP]})
}

module.exports = {
    timetravel: false,
    methodology: 'Count the number of tokens that are currently deposited in all the live prediction games',
    solana: { tvl, },
}
