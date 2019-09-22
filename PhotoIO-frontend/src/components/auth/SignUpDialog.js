import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp} from "../../utils/routes";
import AuthForm from "./SignUpForm";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {withSnackbar} from "notistack";

export const mapStateToProps = state => {
    return { org: state.org.organismeChoosen  } //wtf is that
}

export class SignUpDialog extends  Component {

    handleSubmit = (payload) => {
        this.props.signUp(this.props.user, payload).then(() => {
            this.props.enqueueSnackbar('', {variant: 'success'})
            this.props.onClose(true);
        })
    };

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <DialogTitle>Register </DialogTitle>
                <DialogContent>
                    <AuthForm
                        handleSubmit={this.handleSubmit}/>
                </DialogContent>
            </Dialog>
        );
    }
}

export default connect(mapStateToProps, { signUp })(withSnackbar(SignUpDialog))
