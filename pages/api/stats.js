import Web3 from "web3";

export default async function handler(req, res) {
  const web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-rpc.com"));

  const contractAbi = [
    {
      "inputs": [],
      "name": "totalFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs":[{"internalType":"address","name":"account","type":"address"}],
      "name":"balanceOf",
      "outputs":[
        {"internalType":"uint256",
        "name":"",
        "type":"uint256"
        }
      ],
      "stateMutability":"view",
      "type":"function"
    }
  ];
  const fundAbi = [{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
  
  let mainContract = new web3.eth.Contract(contractAbi,"0x13748d548D95D78a3c83fe3F32604B4796CFfa23");
  var fundContract = new web3.eth.Contract(fundAbi,"0x6A82FdE3033a969cf1ECe48D76aA942E9Fc567Db");
  
  let totalSupply = await mainContract.methods.totalSupply.call().call();
  const totalFees = await mainContract.methods.totalFees.call().call();
  const fundAmt = await fundContract.methods.balance.call().call();
  const totalBurned = await mainContract.methods.balanceOf("0x0000000000000000000000000000000000000001").call();

  let currentSupply = totalSupply-totalFees-totalBurned-fundAmt;

  res.status(200).json({ currentSupply: currentSupply })
}
