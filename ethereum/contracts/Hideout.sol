pragma solidity ^0.4.17;

contract HideoutFactory {
    address[] public hideouts;

    function createHideout() public {
        address hideout = new Hideout(msg.sender);
        hideouts.push(hideout);
    }

    function getHideouts() public view returns (address[]) {
        return hideouts;
    }
}

contract Hideout {
    address public owner;

    function Hideout(address creator) public {
        owner = creator;
    }
}