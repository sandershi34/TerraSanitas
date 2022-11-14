var MyContract = artifacts.require("terraSanitas");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};