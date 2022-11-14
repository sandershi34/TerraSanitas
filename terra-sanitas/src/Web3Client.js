import Web3 from 'web3';
import tsContractBuild from 'contracts/terraSanitas.json'
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

export const registerUser = async() =>{
    if( !isInitialized ){
        await init();
    }
    tsContract.methods.register().send({from:selectedAccount})
}