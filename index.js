const Web3=require("web3");
const abi=require("./abi.json");
const web3 = new Web3('https://api.s0.ps.hmny.io');
const axios=require("axios");
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

async function login(){
  var no=await nodecount();
  let rpcurl=[];
  let jwtsign=[];
  let whoissign=[];
  for(var x=0;x<no;x++){
    var rpc=await noderpc(x);
    rpcurl.push(rpc);
  }
  axios.all(rpcurl.map((endpoint) => axios.get(endpoint))).then(
    (data) =>{
       //console.log(data[0]);
      var fullres=data.split("$");
      jwtsign.push(fullres[0]);
      whoissign.push(whoissign[0]);
    }
  );
  
  
 
  
}
login();
module.exports={nodecount,nodenameat,noderpc,allnoderpc}