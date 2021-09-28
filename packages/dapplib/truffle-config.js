require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan response oval unveil install canoe army gift'; 
let testAccounts = [
"0x3a35bb1a914e1b11a9e3688bf284b924f563609011af251d45cd8dceae184a8c",
"0x9f40ad5a60be1bc45f0b6319961ed527f0d6c09287594a0f80b37b1d508744e8",
"0x2ae3c30c5d1cff6463853b235b73ab1f288865937e6734ce139848a8e52dbe15",
"0x8d93e285f15b4f1a47f5519601d237c838f3bfe08b6eaa0a88e561880f375c5e",
"0xaed9ab745a86d939f6feb143c8e00d8c7c8609b7cd82353b974ded7d5100c961",
"0xa30ba84bfb31bb55e3322f3d3f549dc2c0c1920c54ee7a677be69b5752b87988",
"0xc64c7067e90f047492b36566b7831c1799a93b3deeb97d641a4e36475c9994f3",
"0xef99a4d080be4a9f424c250a1176b2f68519240161a2531d17121ed45d692c97",
"0x65f62b8eb1396849b7c10b869ddb2fc00d4f6a00e2e0c515f1d45badd6914722",
"0x1177512b59b1f70b327fae97c48c1b966254af6ba83a3d5040501e87f87e2d75"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

