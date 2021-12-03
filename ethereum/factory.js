import web3 from './web3';
import HideoutFactory from './build/HideoutFactory.json';
import config from './config';

const instance = new web3.eth.Contract(
  JSON.parse(HideoutFactory.interface),
  config.address
);

export default instance;