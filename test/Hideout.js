const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/HideoutFactory.json");
const compiledHideout = require("../ethereum/build/Hideout.json");

let accounts;
let factory;
let hideout;
let hideoutAddress;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createHideout().send({
    from: accounts[0],
    gas: "1000000",
  });

  [ hideoutAddress ] = await factory.methods.getHideouts().call();
  hideout = await new web3.eth.Contract(
    JSON.parse(compiledHideout.interface),
    hideoutAddress
  );
});

describe("Hideouts", () => {
  it("deploys a factory and a hideout", () => {
    assert.ok(factory.options.address);
    assert.ok(hideout.options.address);
  });

  it("marks caller as the owner", async () => {
    const owner = await hideout.methods.owner().call();
    assert.equal(accounts[0], owner);
  });
});
