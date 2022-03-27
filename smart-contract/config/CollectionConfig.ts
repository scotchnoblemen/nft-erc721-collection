import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ScotchNoblemen',
  tokenName: 'Scotch Noblemen - Final Test',
  tokenSymbol: 'SCNBLMN',
  hiddenMetadataUri: 'ipfs://QmcMsAPmFEYHU2oJwwWgr9H6x8SgB8GnS43CSVuLDjYozZ/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00005,
    maxMintAmountPerTx: 3,
  },
  
  publicSale: {
    price: 0.00007,
    maxMintAmountPerTx: 5000,
  },
  contractAddress: "0xB73DCa104489E49Bb9362C5b9b8015e794AA8641",
  marketplaceIdentifier: 'Scotch Noblemen - Final Test',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
