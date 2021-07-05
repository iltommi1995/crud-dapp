const getContractInstance = async (web3, CrudContract) => {
  // Retrieve networkId and deployedNetwork
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = CrudContract.networks[networkId];

  // Create a contract instance
  const instance = new web3.eth.Contract(
    CrudContract.abi,
    deployedNetwork && deployedNetwork.address,
  );

  // Return contract instance
  return instance;
}

export default getContractInstance;