import { ethers } from "ethers";
import { useState } from 'react';


const abi = [
  {
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
]; // your contract abi

const contract_address = '0x30A16396e7e9D7B0778A2B6d4e0e0C938B950375'; //your contract address

function HelloWorld() {

  const [greet, setGreet] = useState('click below to connect to your smart contract');

  const provider = new ethers.providers.AlchemyProvider('kovan', 'Pf6DzdXwRJ0RmRALDZqL3yo500QAZNkn'); // Alchemy api
  // const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545'); //open ganache gui in bg.

  const contract = new ethers.Contract(contract_address, abi, provider);

  const getGreeting = async () => {
    const greeting = await contract.hello();
    setGreet(greeting);
  };

  return (
    <div className="HelloWorld">
      <h1>{greet}</h1>
      <button onClick={getGreeting}>connect</button>
    </div>
  );
}

export default HelloWorld;
