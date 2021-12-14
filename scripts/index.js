const Box = artifacts.require('Box');

module.exports = async function main(callback) {
    try {
        // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);

        // Setup a truffle contract, respresenting our deployed Box instance
        const box = await Box.deployed();

        // Send a transaction to store() a new value in the Box
        await box.store(23);

        // Call the retreive() function of the deployed Box contract
        const value = await box.retrieve();
        console.log('Box value is', value.toString());

        callback(0);
    } catch (error) {
        console.log(error);
        callback(1);
    }
}