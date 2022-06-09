import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import DrawerComp from "./Drawer";

const Navigation = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log('theme: ', theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }} position='relative'>
        <Toolbar>
          <PetsIcon sx={{ transform: "scale(1)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1rem", paddingLeft: "15px" }}>
                Walkie Doggie
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "15px" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="About Us" />
                <Tab label="Contact Us" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navigation;
