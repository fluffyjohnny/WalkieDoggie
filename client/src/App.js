import NavBar from "./Components/NavBar";
import Browse from "./Components/Browse/Index";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Browse />
    </BrowserRouter>
  );
}

export default App;
