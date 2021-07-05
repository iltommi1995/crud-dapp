
import React, { useState, useEffect } from "react";
import CrudContract from "./contracts/Crud.json";
import getWeb3 from "./utils/getWeb3";
import getContractInstance from "./utils/getContractInstance";
import AppTitle from './components/atoms/appTitle/AppTitle'
import CreateMovie from './components/molecules/createMovie/CreateMovie';
import MovieTable from './components/molecules/movieTable/MovieTable';


export default function App(props) {
    // To Save the deployed smart contract in the state
    const [contract, setContract] = useState(null);
    // The list of the movies retrieved calling the contract
    const [movies, setMovies] = useState([]);
    // To Save the Metamask account address in the state
    const [account, setAccount] = useState("");

    // Fetch data when app starts
    useEffect(() => {
        (async () => {
            // Web3 instance to interact with the blockchain
            const web3 = await getWeb3();
            // Retrieve the Eth accounts and saving the first account in the state
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            // Retrieve the contract instance
            const instance = await getContractInstance(web3, CrudContract);
            // Save the contract instance in the state
            setContract(instance)
            // Fetch movies
            reloadMovies(instance)
        })();
    }, []);

    // Function to fetch movies
    async function reloadMovies(con) {
        let mo = await con.methods.allMovies().call()
            .then(data => {
                let counter = data[0].length;
                let mov = [];
                for (let i = 0; i < counter; i++) {
                    if (data[0][i] !== "0")
                        mov.push({ "id": data[0][i], "title": data[1][i], "director": data[2][i], year: data[3][i] })
                }
                return mov;
            });
        setMovies(mo);
    }

    return (
        <div className="container">
            <AppTitle />
            <div className="add-movie-button">
                <CreateMovie account={account} contract={contract} reloadMovies={reloadMovies} />
            </div>
            <MovieTable account={account} contract={contract} movies={movies} reloadMovies={reloadMovies} />
        </div>
    )
}