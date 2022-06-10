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
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const pageLinks = [{ text: "Browse", route: "/" }];

const authPageLinks = [
  { text: "Cart", route: "/orders/cart" },
  { text: "Previous Orders", route: "/orders/previous" },
];

const vendorPageLinks = [
  { text: "Current Orders", route: "/orders/vendor" },
  { text: "Add New Dish", route: "/dishes/new" },
];

const Navigation = () => {
  const [value, setValue] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = event => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const handleLogin = (e, input) => {
  //   setAnchorElNav(null);
  //   setAnchorElUser(null);

  //   // delay login to allow for animation to catch up with state
  //   setTimeout(() => {
  //     login(e, input);
  //   }, 500);
  // };

  // const handleLogout = () => {
  //   setAnchorElUser(null);
  //   setAnchorElNav(null);

  //   // delay logout to allow for animation to catch up with state
  //   setTimeout(() => {
  //     logout();
  //   }, 500);
  // };

  return (
    <AppBar sx={{ background: "#494949" }} position="relative">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PetsIcon sx={{display: { xs: "none", md: "flex" }  }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, ml: 2, display: { xs: "none", md: "flex" } }}
          >
            WalkieDoggie
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pageLinks.map((page) => (
                <Link
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  component={Typography}
                  to={page.route}
                  style={{
                    textDecoration: "none",
                    fontSize: "larger",
                    color: "#111",
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>{page.text}</MenuItem>
                </Link>
              ))}
              {/* map over page routes to be shown if user is logged in */}
              {/* {userId &&
                authPageLinks.map((page) => (
                  <Link
                    key={page.text}
                    onClick={handleCloseNavMenu}
                    component={Typography}
                    to={page.route}
                    style={{
                      textDecoration: "none",
                      fontSize: "larger",
                      color: "#111",
                    }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      {page.text}
                    </MenuItem>
                  </Link>
                ))} */}
              {/* map over page routes to be shown if user is logged in and is a vendor */}
              {/* {isVendor &&
                vendorPageLinks.map((page) => (
                  <Link
                    key={page.text}
                    onClick={handleCloseNavMenu}
                    component={Typography}
                    to={page.route}
                    style={{
                      textDecoration: "none",
                      fontSize: "larger",
                      color: "#111",
                    }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      {page.text}
                    </MenuItem>
                  </Link>
                ))} */}
            </Menu>
          </Box>

          <Tabs
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
      </Container>
    </AppBar>
  );
};

export default Navigation;
