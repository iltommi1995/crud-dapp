<div>
  <img src="https://github.com/iltommi1995/crud-dapp/blob/main/readme_img/title.png"  />
</div>

## Table of contents:
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
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

