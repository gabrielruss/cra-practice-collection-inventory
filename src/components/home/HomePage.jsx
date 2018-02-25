import React from "react";
import reactLogo from '../../assets/reactjs-logo.jpg';
import { Grid, Header, Button, Embed } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Grid columns="one">
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" content="Welcome to my App!" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button as={NavLink} to="/inventory" primary content="View Game Inventory" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h4" content="Here is a video to watch..." />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Embed
            id="1O4Ji-G8amg"
            placeholder={reactLogo}
            source="youtube"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomePage;
