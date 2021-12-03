import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Grid } from 'semantic-ui-react';

import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import config from '../../game/game';

import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import Hideout from '../../ethereum/hideout';
 
export default class HideoutShow extends Component {
  static async getInitialProps(props) {
    return { 
      hideout: props.query.address
    };
  }

  state = {
    initialize: true,
    game: config
  }

  render() {
    const { hideout } = this.props;
    const { initialize, game } = this.state

    console.log('game config', config);

    return (
      <Layout>
        {/* <Container text> */}
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                {/* render game */}
                <IonPhaser game={game} initialize={initialize} />
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