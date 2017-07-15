/*
 * migrations/2_deploy_contracts.js:
 */
module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
 
 // deployer.deploy(MetaCoin);
  // This line is added to deploy the new contract
 // deployer.deploy(ProofOfExistence1);
  
  //deployer.deploy(ProofOfExistence2);
   deployer.deploy(ECVerify);
    deployer.autolink();
   deployer.deploy(StoreData);
  // deployer.deploy(Patient);
  
};