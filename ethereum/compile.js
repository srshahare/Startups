const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8')

// console.log(source)
const input = {
    language: "Solidity",
    sources: {
      "Campaign.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["evm", "bytecode", "abi"],
        },
      },
    },
  };

const output = JSON.parse(solc.compile(JSON.stringify(input)),1).contracts['Campaign.sol'];

fs.ensureDirSync(buildPath)
for(let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    )
}