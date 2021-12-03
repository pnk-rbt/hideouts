import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'
import { Link } from '../routes';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

export default class HideoutsIndex extends Component {
  // getInitialProps is next's equivalent to componentDidMount
  // it's a custom lifecycle method to avoid issues
  // related to next using server-side rendering
  // instead of client-side rendering like normal react
  static async getInitialProps() {
    const hideouts = await factory.methods.getHideouts().call();
    return { hideouts };
  }

  renderHideouts() {
    const items = this.props.hideouts.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/hideout/${address}`}>
            <a>View Hideout</a>
          </Link>),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Link route='/hideout/new'>
          <a>
            <Button 
              content="Create a new Hideout"
              floated="right"
              icon="add"
              primary
            />
          </a>
        </Link>
        {this.renderHideouts()}
      </Layout>
    );
  }
}