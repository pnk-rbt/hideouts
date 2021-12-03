import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Grid } from 'semantic-ui-react'

import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import Hideout from '../../ethereum/hideout';
 
export default class HideoutShow extends Component {
  static async getInitialProps(props) {
    return { 
      hideout: props.query.address
    };
  }

  render() {
    const {
      hideout
    } = this.props;

    return (
      <Layout>
        {/* <Container text> */}
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                {/* render game */}
              </Grid.Column>
              <Grid.Column width={6}>
                {/* render forms for buying NFTs?
                  or can this be handled within phaser? */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        {/* </Container> */}
      </Layout>
    );
  }
};