//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
contract terraSanitas {

    struct Participant {
        bool validUser;
    }
    
    event ValidUser(address user);
    address Authority;
    mapping(address => Participant) participants; 
    address[] public participantslist;
    
    
    modifier validParticipant(){
        require(participants[msg.sender].validUser, "Not a Registered Participant");
        _;
    }
    
    //OnlyAuthority Modifer and add address as parameter
    function register() public{
        require(participants[msg.sender].validUser != true);
        //require(msg.sender == Authority, "No permission to register user");
        participants[msg.sender] = Participant(true);
        participantslist.push(msg.sender);
    }

    function viewParticipants() public view returns(address [] memory){
        return participantslist;
    }

    function deregister() public validParticipant{
        require(participants[msg.sender].validUser, "Already deregistered");
        participants[msg.sender].validUser = false;
    }

    function request() public validParticipant{
        require(participants[msg.sender].validUser, "successfully requested");
        // emits user validity to backendcd to give the go ahead to send the files
        emit ValidUser(msg.sender);
        //calls token smart contract to send payment
    }

    function upload() public validParticipant{
        require(participants[msg.sender].validUser, "successfully uploaded");
         // emits user validity to backend to give the go ahead to upload the files
        emit ValidUser(msg.sender);
    }

}