const Web3=require("web3");
const abi=require("./abi.json");
const web3 = new Web3('https://api.s0.ps.hmny.io');
const contract_address="0xdC092Ea4D6e83B303ff731ACdC6f4Bf3764Fb803";
const contract = new web3.eth.Contract(abi, contract_address);
export function nodecount(){
contract.methods
.nodecount()
.call()
.then((c)=>{
 console.log(c);
}); 
}
nodecount();