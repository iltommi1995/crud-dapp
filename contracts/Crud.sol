pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract Crud {
    struct Movie {
        uint id;
        string name;
        string director;
        uint year;
    }

    Movie[] public movies;
    uint public nextId = 1;

    // Create new movie
    function create(string memory name, string memory director, uint year) public {
        movies.push(Movie(nextId, name, director, year));
        nextId++;
    }

    // Read movie data passing movie id
    function read(uint id) view public returns(uint, string memory, string memory, uint) {
        uint i = find(id);
        return(movies[i].id, movies[i].name, movies[i].director, movies[i].year);
    }

    // Update movie
    function update(uint id, string memory name, string memory director, uint year) public {
        uint i = find(id);
        movies[i].name = name;
        movies[i].director = director;
        if(year > 1895) {
            movies[i].year = year;
        }
    }

    // Delete movie
    function destroy(uint id) public {
        uint i = find(id);
        delete movies[i];
    }

    // Find movie
    function find(uint id) view internal returns(uint) {
        for(uint i = 0; i < movies.length; i++) {
            if(movies[i].id == id) {
                return i;
            }
        }
        revert('Movie does not exist!');
    }

    // Return a list of all movies
    function allMovies() view public returns(uint[] memory, string[] memory, string[] memory, uint[] memory) {
        uint[] memory ids = new uint[](movies.length);
        string[] memory titles = new string[](movies.length);
        string[] memory directors = new string[](movies.length);
        uint[] memory releaseYears = new uint[](movies.length);

        for(uint i = 0; i < movies.length; i++) {
                ids[i] = movies[i].id;
                titles[i] = movies[i].name;
                directors[i] = movies[i].director;
                releaseYears[i] = movies[i].year;
        }
        return(ids, titles, directors, releaseYears);
    }
}