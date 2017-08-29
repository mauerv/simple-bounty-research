const ResearchNetwork = artifacts.require("./ResearchNetwork.sol");

module.exports = function(deployer) {
  deployer.deploy(ResearchNetwork);
};
