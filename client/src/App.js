import NavBar from "./Components/NavBar";
import Browse from "./Components/Browse/Index";
import { CssBaseline, Box, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box backgroundColor="secondary.main" minHeight="100vh">
        <NavBar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Browse />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
