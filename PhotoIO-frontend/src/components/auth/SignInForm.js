import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {withSnackbar} from "notistack";


export class SignUpForm extends Component{

    state = {
        firstname: null,
        lastname: null,
        username: null,
        about: null,
        password: null,
        mail: null
    };

    // Handle valid form only
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // VALIDATION
    formValid = () => {


    };

    onSubmit = (event) => {
        event.preventDefault();
        this.formValid().then(() => {
            const payload = {
                firstname: this.state.firstname,
                username: this.state.username,
                about: this.state.about,
                password: this.state.password,
                mail: this.state.mail
            }
            this.props.handleSubmit(payload)
        })
            .catch( text => {
                this.props.enqueueSnackbar(text, {variant: 'error'})
            })
    };

    render(){

        return (
            <form onSubmit={this.onSubmit}>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            label="Email Adresss"
                            name = 'mail'
                            value={this.state.mail}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            label="Password"
                            name = 'password'
                            value={this.state.passwowrd}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            //add le shit pour cacher les pass
                        />
                    </Grid>
                    <Grid item xs={6} align='center'>
                        <Button variant="contained" color="primary" type="submit">Next</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default withSnackbar(SignUpForm);
