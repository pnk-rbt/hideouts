import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Message } from 'semantic-ui-react'

import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';
import { Router } from '../../routes';
 
export default class HideoutNew extends Component {
  state = {
    errorMessage: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ errorMessage: '', loading: true });

    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createHideout()
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch(error) {
      this.setState({ errorMessage: error.message });
    }

    this.setState({ loading: false });
  }

  onChange = (event) => {
    this.setState({
      errorMessage: ''
    });
  };

  render() {
    const {
      errorMessage,
      loading
    } = this.state;

    return (
      <Layout>
        <Container text>
          Generate a new Hideout
          <Form error={ !!errorMessage } onSubmit={ this.onSubmit }>
            <Message error header='Oops!' content={ errorMessage } />
            <Form.Button
              content='Create'
              loading={ loading }
              primary
            />
          </Form>
        </Container>
      </Layout>
    );
  }
};