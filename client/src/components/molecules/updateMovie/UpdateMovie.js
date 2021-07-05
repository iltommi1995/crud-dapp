import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

import './updateMovie.scss'

export default function UpdateMovie(props) {
    // Open and close the modal
    const [open, setOpen] = React.useState(false);
    // Id of the selected movie
    const [id, setId] = React.useState(null)

    // Handle click on open modal button
    const handleClickOpen = (e) => {
        // Get the id of the selected movie
        let newId = Number.isNaN(parseInt(e.target.id.split("-")[1])) ? parseInt(e.target.parentElement.id.split("-")[1]) : parseInt(e.target.id.split("-")[1]);
        // Set the id
        setId(newId)
        setOpen(true);
    };
    // Handle ckick on close modal button
    const handleClose = () => {
        setOpen(false);
    };

    // Handle onClick on Edit button
    const handleEdit = async () => {
        // Movie data before edit
        let oldTitle, oldDirector, oldDate;
        props.movies.map(movie => {
            if(parseInt(movie.id) === id) {
                oldTitle = movie.title;
                oldDirector = movie.director;
                oldDate = movie.year;
            }
        })
        // Actual year
        let d = new Date();
        let y = d.getFullYear();
        // Controls to see if the user filled the form fields
        let title = document.getElementById("title").value == "" ? oldTitle : document.getElementById("title").value;
        let director = document.getElementById("director").value == "" ? oldDirector : document.getElementById("director").value;
        let year = parseInt(document.getElementById("year").value) < 1895 || Number.isNaN(parseInt(document.getElementById("year").value)) || parseInt(document.getElementById("year").value) > y ? oldDate : parseInt(document.getElementById("year").value);

        // Update movie with the smart contract method
        await props.contract.methods.update(id, title, director, year).send({"from": props.address});

        // Call function to reload movie list
        props.reloadMovies(props.contract);

        // Close modal
        setOpen(false)
    }

    return (
        <div>
            <EditIcon onClick={handleClickOpen} id={`edit-${props.id}`} className="edit-icon" />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update movie
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
                    <Button onClick={handleEdit} color="primary">
                        Update Movie
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}