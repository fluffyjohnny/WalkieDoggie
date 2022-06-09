import React, { Component } from "react";
import Map from "./Map";
import Menu from "./Menu";
import Grid from "@mui/material/Grid";

export default class Browse extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2} justify='center'>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Map />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Menu />
          </Grid>
        </Grid>
      </div>
    );
  }
}
