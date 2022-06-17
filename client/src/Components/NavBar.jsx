import React, { useState, useContext } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { UserContext } from "./UserProvider";

// login styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "5ch",
  [theme.breakpoints.up("md")]: {
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon,
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: `0.5em`, // CHANGED FROM ABOVE LINE
    transition: theme.transitions.create("width"),
    width: "5ch",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
  },
}));

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const pageLinks = [{ text: "Browse", route: "/" }, { text: "Become a sitter", route: "/sign-up" }];

const authPageLinks = [

];

const vendorPageLinks = [
  
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, login, logout, setVendorModeFromStorage, vendorMode } =
    useContext(UserContext);
  // const { userId, name, isVendor, avatar } = user;
  const [input, setInput] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = (e, input) => {
    setAnchorElNav(null);
    setAnchorElUser(null);

    // delay login to allow for animation to catch up with state
    setTimeout(() => {
      login(e, input);
    }, 500);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    setAnchorElNav(null);

    // delay logout to allow for animation to catch up with state
    setTimeout(() => {
      logout();
    }, 500);
  };

  return (
    <AppBar sx={{ background: "#494949" }} position="relative">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PetsIcon sx={{ display: { xs: "none", md: "flex" } }} />
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
              {
                // userId &&
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
                ))
              }

              {//isVendor 
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
                ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Walkie Doggie
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pageLinks.map((page, index) => (
              <Link
                key={page.text}
                onClick={handleCloseNavMenu}
                component={Typography}
                to={page.route}
                style={{
                  textDecoration: "none",
                  fontSize: "larger",
                  color: "#FFF",
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>{page.text}</MenuItem>
              </Link>
            ))}
             {//userId &&
              authPageLinks.map(page => (
                <Link
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  component={Typography}
                  to={page.route}
                  style={{
                    textDecoration: 'none',
                    fontSize: 'larger',
                    color: '#FFF',
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>{page.text}</MenuItem>
                </Link>
              ))}
            {/* map over page routes to be shown if user is logged in and is a vendor */}
            {//isVendor &&
              vendorMode &&
              vendorPageLinks.map(page => (
                <Link
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  component={Typography}
                  to={page.route}
                  style={{
                    textDecoration: 'none',
                    fontSize: 'larger',
                    color: '#FFF',
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>{page.text}</MenuItem>
                </Link>
              ))}
          </Box>


          <Box sx={{ flexGrow: 0, justifyContent: 'flex-end' }}>
            <Stack direction="row" alignItems="center">
              {/* {'hello' && 
              <Typography sx={{ mr: 2 }}>{'hello'}</Typography>} */}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={''} />
                </IconButton>
              </Tooltip>
            </Stack>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Toolbar>
                {
                // !userId ? 
                (
                  <div>
                    <Search>
                      <StyledInputBase
                        placeholder="password"
                        inputProps={{ 'aria-label': 'password' }}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                      />
                    </Search>
                    <Button
                      size="large"
                      color="secondary"
                      variant="contained"
                      onClick={e => handleLogin(e, input)}
                    >
                      Log In
                    </Button>
                  </div>
                ) 
                // : (
                //   <Button onClick={handleLogout}>Log out</Button>
                // )
              }
              </Toolbar>
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
