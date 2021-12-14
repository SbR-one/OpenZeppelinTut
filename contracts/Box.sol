// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import Auth from access-control subdirectory
// import "./access-control/Auth.sol";

//Import Ownable from the OpenZeppelin Contracts Library
import "@openzeppelin/contracts/access/Ownable.sol" ;

contract Box is Ownable {
    uint256 private _value;
    // Auth private _auth;

    // Emitted when the store value changes
    event ValueChanged(uint value);

    // constructor() {
    //     _auth = new Auth(msg.sender);
    // }

    // Stores a new value in the contract
    function store(uint256 value) public onlyOwner {

        //Require that the caller is registered as an admin in Auth
        // require(_auth.isAdministrator(msg.sender), "Unauthorized user");
        
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }

}