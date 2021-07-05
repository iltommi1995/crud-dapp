<div>
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/title.png"  />
</div>

## Table of contents:
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Dependencies and installation](#dependencies-and-installation)
- [Project structure](#project-structure)
  - [Client folder](#client-folder)
  - [Contracts folder](#contracts-folder)
  - [Migrations folder](#migrations-folder)
  - [Test folder](#test-folder)


## Introduction

This is an example of simple CRUD DApp, a decentralized application running on Ethereum blockchain.
The application is composed of two main parts:
- The backend, running on the blockchain with a smart contract (in Solidity);
- The frontend, made in React and connected to the blockchain to allow CRUD operations.

You can clone the repository on your computer and run the project, but you'll need to have some tools installed on your computer.

## Requirements

As mentioned above, you need to satisfy the requirements to run this application. 
You need to have installed on your computer:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [truffle](https://www.trufflesuite.com/) --> a Solidity framework, made in Node.js, that you can simply install with npm
- [ganache](https://www.trufflesuite.com/ganache) --> a local Ethereum blockchain that can be used to test smart contracts
- [metamask](https://metamask.io/) --> a crypto wallet that you'll need to configure to interact with the application

Otherwise, you can use [Remix](https://remix.ethereum.org/), an online Solidity IDE, to test smart contracts.

Once all the tools have been installed, you need to set up Metamask, connecting it to one of the automatic generated accounts of Ganache.

<div>
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/ganache_accounts.jpg" width="60%" />
</div>

Here you can see the Ganache UI, with all the accounts with the balances and the network informations. You'll need to connect Metamask to this local network, with one of the Ganache accounts, as you can see in the next two images.

<div>
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/metamask_account.jpg" width="20%" />
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/metamask_account_2.jpg" width="20%" />
</div>

Once Metamask is correctly configured you can continue with the installation.

## Dependencies and installation

You need to clone the repository on your computer, than compile and deploy the smart contracts to your local blockchain with this commands:
```
truffle compile
```

```
truffle deploy
```

Now the smart contracts are deployed, you have to go to the "client" folder and install the npm dependencies with:

```
npm install
```

Once installed the dependecies, all is ready and you only need to start the node server with:

```
npm start
```

You can check the application running on your browser:

<div>
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/crud_app.jpg" width="60%" />
</div>

Let's see the npm dependencies:
- [@material-ui/core and @material-ui/icons](https://material-ui.com/)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [react, react-dom and react-scripts](https://reactjs.org/)
- [web3](https://web3js.readthedocs.io/en/v1.3.4/) --> a collaction of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.


## Project structure

<div>
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/project-structure.png" width="15%" />
</div>

### Client folder

The "client" folder contains the frontend of the application, made in React.

As in the other projects, i organize the React components following the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology, although in this project there are few components.

Furthermore i didn't used class components but only functional components, with React Hooks.

<div>
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/client-structure.jpg" width="15%" />
</div>

In the "components" folder there are all the React components with their scss files. 
In the "contracts" folder there are the json generated compiling the smart contracts. In this json files there is data that the frontend need to use to connect to the smart contract deployed on the blockchain.
In the "utils" folder there are two files, containing the functions to instantiate the Web3 client and the smart contract instance.

For a more detailed analysis of the code, i recommend reading the code's comments.




