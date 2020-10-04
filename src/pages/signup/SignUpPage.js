import React, {Component} from 'react';
import {Button, TextField} from '@material-ui/core';
import styled from 'styled-components';

import './SignUpPage.scss';
import {inject} from 'mobx-react';
import ErrorMessage from '../../components/ErrorMessage';

const Heading = styled.h1 `
  margin-top: 0;
`;

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

const FormField = styled(TextField)`
  width: 100%;
`;

@inject('userStore', 'routerStore')
class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: null
        };
    }

    submit = async () => {
      const { username, password } = this.state;
  
      try {
        await this.props.userStore.signup(username, password);
        this.props.routerStore.push('/signin');
      } catch (error) {
        const errorMessage = error.response.data.message;
        this.setState({ errorMessage });
      }
    };
    render() {
        const {errorMessage} = this.state;

        return (
            <div className="fullscreen-wrapper">
                {/* <FormContainer>
          <Heading>Join us!</Heading>
          <p>Start managing tasks easily.</p>

          {errorMessage && <ErrorMessage message={this.state.errorMessage} />}

          <div>
            <FormField
              id="outlined-name"
              label="Username"
              margin="dense"
              variant="outlined"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <FormField
              id="outlined-name"
              label="Password"
              margin="dense"
              variant="outlined"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <p>
            Passwords must contain at least 1 upper case letter, 1 lower case letter and one number OR special charracter.
          </p>
          <hr/>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.submit}
            >
              SIGN UP
            </Button>
          </div>
        </FormContainer> */
                }

                <FormContainer>
                    <h1>Please Log In</h1>
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
                    <p>
                        Passwords must contain at least 1 upper case letter, 1 lower case letter and one
                        number OR special charracter.
                    </p>

                    <Button
                        fullWidth="fullWidth"
                        variant="contained"
                        color="primary"
                        onClick={this.submit}>
                        SIGN UP
                    </Button>

                </FormContainer>
            </div>
        );
    }
}

export default SignUpPage;
