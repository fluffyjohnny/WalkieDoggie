import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase,
  Stack,
  FormControlLabel,
  Switch,
  Tabs,
  Tab,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Navigation = () => {
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#494949" }} position="relative">
        <Toolbar>
          <PetsIcon sx={{ transform: "scale(1)" }} />

          <Tabs
            sx={{ marginLeft: "15px" }}
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="About Us" {...a11yProps(1)} />
            <Tab label="Contact Us" {...a11yProps(2)} />
          </Tabs>
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Login
          </Button>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navigation;
