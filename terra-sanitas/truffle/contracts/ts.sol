//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
contract terraSanitas {

    struct Participant {
        bool validUser;
    }
    //event
    event ValidUser(address user);
    mapping(address => Participant) participants; 
    address[] public participantslist;
    // modifiers
    
    modifier validParticipant(){
        require(participants[msg.sender].validUser, "Not a Registered Participant");
        _;
    }
    
    //address participant

    function register() public{
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

    function request(address user) public validParticipant{
        require(participants[user].validUser, "successfully requested");
        // emits user validity to backend to give the go ahead to send the files
        emit ValidUser(user);
        //calls token smart contract to send payment
    }

    function upload(address user) public validParticipant{
        require(participants[msg.sender].validUser, "successfully uploaded");
         // emits user validity to backend to give the go ahead to upload the files
        emit ValidUser(user);
    }

}