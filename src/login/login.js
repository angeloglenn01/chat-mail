import React from 'react'
import { FormControl, InputLabel, Input, Paper, withStyles, CssBaseline, Typography,
Button } from '@material-ui/core';

import {Link} from 'react-router-dom';
import styles from './styles';

import firebase from '../utils/firebase';

class LoginComponent extends React.Component{

    constructor() {
        super();
        this.state = {
          email: null,
          password: null,
          serverError: false
        };
      }

    render() {

        const { classes } = this.props;

        return(
            <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5">
                CHAT MAIL
              </Typography>
              <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
                  <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='login-email-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
                  <Input autoComplete="current-password" type="password" onChange={(e) => this.userTyping('password', e)} id='login-password-input'></Input>
                </FormControl>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Log In</Button>
              </form>
              { this.state.serverError ? 
                <Typography className={classes.errorText} component='h5' variant='h6'>
                  Incorrect Login Information
                </Typography> :
                null
              }
              
              <Link className={classes.signUpLink} to='/signup'>Register?</Link>
            </Paper>
          </main>
        );
      }
    
      userTyping = (whichInput, event) => {
        switch (whichInput) {
          case 'email':
            this.setState({ email: event.target.value });
            break;
    
          case 'password':
            this.setState({ password: event.target.value });
            break;
    
          default:
            break;
        }
      }
    
      submitLogin = async (e) => {
        e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.
    
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            this.props.history.push('/dashboard');
          }, err => {
            this.setState({ serverError: true });
            console.log('Error logging in: ', err);
          });
      };
    
    }
    
    export default withStyles(styles)(LoginComponent);