import React from 'react';
import { Typography } from '@material-ui/core';

import './appTitle.scss'

export default function AppTitle(props) {
    return (
        <Typography variant="h1" component="h2" gutterBottom className="title">
            CRUD Movie DApp
        </Typography>
    )
}