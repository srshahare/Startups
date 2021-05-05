import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x71aDf8AF8C84f13E4f66e4F409000c90aA824194'
);

export default instance;