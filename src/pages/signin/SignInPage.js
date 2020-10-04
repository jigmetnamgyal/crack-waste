import React, {Component} from 'react';
import {Button, TextField} from '@material-ui/core';
import styled from 'styled-components';
import Pic from './undraw_not_found.svg';
import './SignInPage.scss';
import {inject} from 'mobx-react';
import ErrorMessage from '../../components/ErrorMessage';

const FormContainer = styled.div `
  max-width: 680px;
  width: 100%;
  height: 800px;
  color: white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #719663;
  padding: 100px;
  border-radius: 5px;
`;

@inject('userStore', 'routerStore')
class SignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMesssage: null
        };
    }

    submit = async () => {
        this.setState({errorMessage: null});
        const {username, password} = this.state;

        try {
            await this
                .props
                .userStore
                .signin(username, password);
            this
                .props
                .routerStore
                .push('/main');
        } catch (error) {
            const errorMessage = error.response.data.message;
            this.setState({errorMessage});
        }
    };

    goToSignUp = () => {
        this
            .props
            .routerStore
            .push('/signup')
    };

    render() {

        const {errorMessage} = this.state;

        return (
            <div className="fullscreen-wrapper">
                <img className="svImg1" src={Pic} alt="EarthPic"/>
                <FormContainer>
                    <h1>Sign In!</h1>
                    {errorMessage && <ErrorMessage message={this.state.errorMessage} />}
                    <TextField
                        margin="normal"
                        onChange={e => this.setState({username: e.target.value})}
                        fullWidth="fullWidth"
                        id="email"
                        label="Username"
                        name="email"
                        autoComplete="email"
                        autoFocus="autoFocus"/>
                    <TextField
                        margin="normal"
                        fullWidth="fullWidth"
                        onChange={e => this.setState({password: e.target.value})}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"/>

                    <Button
                        type="submit"
                        fullWidth="fullWidth"
                        variant="contained"
                        color="primary"
                        onClick={this.submit}
                        className="signInBtn">
                        Sign In
                    </Button>
                    <Button fullWidth="fullWidth" onClick={this.goToSignUp}>
                        Don't have an account? Sign up now!
                    </Button>

                </FormContainer>

            </div>
        );
    }
}

export default SignInPage;
