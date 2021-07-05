import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './createMovie.scss'

export default function CreateMovie(props) {
    // Open and close the modal
    const [open, setOpen] = React.useState(false);
    // Handle click on open modal button
    const handleClickOpen = () => {
        setOpen(true);
    };
    // Handle ckick on close modal button
    const handleClose = () => {
        setOpen(false);
    };

    // Handle onClick on Create button
    const handleCreate = async () => {
        // Extract data from form fields
        let title = document.getElementById("title").value;
        let director = document.getElementById("director").value;
        let year = parseInt(document.getElementById("year").value);

        // Actual year
        let d = new Date();
        let y = d.getFullYear();

        // Check if user filled correctly form fields
        if(title != "" && director != "" && year >= 1895 && year <= y && Number.isInteger(year)) {
            // Create new movie with the smart contract method
            await props.contract.methods.create(title, director, year).send({"from": props.account});
    
            // Call function to reload movie list
            props.reloadMovies(props.contract);
    
            // Close modal
            setOpen(false)
        } else {
            // Aler user
            alert(`You have to insert a movie title, a movie director and a year between 1895 and ${y}.`)
        }

    }

    return (
        <div>
            <Button variant="outlined" color="primary" className="add-button" onClick={handleClickOpen}>
                Add Movie
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new Movie
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Movie title"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="director"
                        label="Movie Director"
                        fullWidth
                    />
                    <TextField
                        type="number"
                        margin="dense"
                        id="year"
                        label="Release year"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} color="primary">
                        Add Movie
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}