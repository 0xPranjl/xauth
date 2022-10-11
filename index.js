const Web3=require("web3");
const abi=require("./abi.json");
const web3 = new Web3('https://api.s0.ps.hmny.io');
const contract_address="0xdC092Ea4D6e83B303ff731ACdC6f4Bf3764Fb803";
const contract = new web3.eth.Contract(abi, contract_address);
async function nodecount(){
    var v;
await contract.methods
.nodecount()
.call()
.then((c)=>{
  v=c;
}); 
return v;
}
async function nodenameat(x){
  var naam;
var nodecoun=await nodecount();
    contract.methods
    .nodeatindex(x)
    .call()
    .then((c)=>{
      naam=c;
    });
    return naam;
}   
async function noderpc(index){
var rc;
await contract.methods
    .nodes(index)
    .call()
    .then((c)=>{
     rc=c[2];
    });
return rc;
} 
   
async function allnoderpc(){
  var no=await nodecount();
  //console.log(no);
  for(var x=0;x<no;x++){
    var rpc=await noderpc(x);
    console.log(rpc);
   }
}

module.exports={nodecount,nodenameat,noderpc,allnoderpc}