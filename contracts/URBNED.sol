// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract URBNED is ERC20, Ownable {
    uint8 private _decimals = 6;
    uint256 private constant TOTAL_SUPPLY = 80_000_000 * 10**6;

    constructor() ERC20("Urbned", "URBN") Ownable() {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}