import React, { Component } from "react";
import Map from "./Map";
import Menu from "./Menu";
import { Grid, Container, Divider, Typography } from "@mui/material";
import SearchByDistance from "./SearchByDistance";

export default class Browse extends Component {
  render() {
    return (
      <Container sx={{mt: '40px'}}>
        <Typography variant="h4" component="h2" textAlign="center">Look for your pet's next staycation!</Typography>
      <Divider sx={{ my: 3, borderBottomWidth: 4 }} color="#494949" />
        <Grid container spacing={3} justify="center">
          <Grid item xs={6} md={8} lg={12}>
            <Map />
          </Grid>
          <Grid item xs={6} md={4} lg={12}>
            <SearchByDistance />
            <Menu />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
