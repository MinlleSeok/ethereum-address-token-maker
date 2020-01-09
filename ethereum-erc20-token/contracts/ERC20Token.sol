pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract ERC20Token is ERC20, ERC20Detailed {
    uint256 public INITIAL_SUPPLY = 12000;
    constructor() ERC20Detailed("ERC20", "ERC", 18) public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}