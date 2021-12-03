import web3 from './web3';
import Hideout from './build/Hideout.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Hideout.interface),
    address
)};