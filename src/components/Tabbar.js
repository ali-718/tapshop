import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Shop from './../screens/Shop';
import Sell from './../screens/Sell';
import Offers from './../screens/Offers';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <Shop />
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            <Sell products={() => this.props.navigation.navigate("Products")} />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Offers />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}