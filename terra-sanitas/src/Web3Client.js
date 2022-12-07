import Web3 from 'web3';
import tsContractBuild from 'contracts/terraSanitas.json'
import app from "./App";
let selectedAccount;
let tsContract;
let isInitialized = false;

export const init = async() => {

        let provider = window.ethereum;
        
        if(typeof provider !== 'undefined'){

            provider
                .request({method:'eth_requestAccounts'})
                .then((accounts)=>{
                    selectedAccount = accounts[0]
                    console.log(selectedAccount)
                }).catch((err)=>{
                    console.log(err)
                    return
                })

            window.ethereum.on('accountshanged', function (accounts){
                selectedAccount = accounts[0];
                console.log(selectedAccount)
            })
        }

        const web3 = new Web3(provider);

        const networkId = await web3.eth.net.getId()

        tsContract = new web3.eth.Contract(tsContractBuild.abi,tsContractBuild.networks[networkId].address)
        
        isInitialized = true;
}

export const GetUsers = async() =>{
    if( !isInitialized ){
        await init();
    }
    //await tsContract.methods.viewParticipants().send({from:selectedAccount})
    return await tsContract.methods.viewParticipants().send({from:selectedAccount})
}

export const RegisterUser = async() =>{
    if( !isInitialized ){
        await init();
    }
    return await tsContract.methods.register().send({from:selectedAccount})
}
export const DeregisterUser = async() =>{
    if( !isInitialized ){
        await init();
    }
    return await tsContract.methods.deregister().send({from:selectedAccount})
}
export const UploadInfo = async() =>{
    if( !isInitialized ){
        await init();
    }
    return await tsContract.methods.upload().send({from:selectedAccount})
}

export const RequestInfo = async() =>{
    if( !isInitialized ){
        await init();
    }
    await tsContract.methods.request().send({from:selectedAccount})
}