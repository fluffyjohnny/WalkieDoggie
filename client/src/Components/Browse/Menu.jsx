import React from "react";
import {
  Container,
  Card,
  Stack,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const Menu = () => {
  const [pets, setPets] = React.useState(() => []);

  const handlePets = (event, pet) => {
    setPets(pet);
  };

  const [service, setService] = React.useState("");

  const handleService = (event) => {
    setService(event.target.value);
  };

  const [size, setSize] = React.useState("");

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <Card
      sx={{
        borderColor: "primary.main",
        mb: 2,
        backgroundColor: "info.main",
        py: 1,
      }}
    >
      <Container sx={{ margin: "20px 0" }}>
        <Stack direction="column" spacing={2}>
          <Grid container spacing={3} justify="center" alignItems="center" sx={{mb: "20px"}}>
            <Grid item>
              <Typography>Im looking for service for my...</Typography>
            </Grid>
            <Grid item>
              <ToggleButtonGroup
                color="warning"
                size="small"
                value={pets}
                onChange={handlePets}
                arial-label="pet selection"
              >
                <ToggleButton value="dog" aria-label="dog">
                  Dog
                </ToggleButton>
                <ToggleButton value="cat" aria-label="cat">
                  Cat
                </ToggleButton>
                <ToggleButton value="bunny" aria-label="cat">
                  Bunny
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <FormControl fullWidth>
            <InputLabel>I'm looking for...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={service}
              label="I'm looking for..."
              onChange={handleService}
            >
              <MenuItem value={"boarding"}>Boarding</MenuItem>
              <MenuItem value={"drop-in"}>Drop-In Visit</MenuItem>
              <MenuItem value={"house sitting"}>House Sitting</MenuItem>
              <MenuItem value={"doggy daycare"}>Doggy Daycare</MenuItem>
              <MenuItem value={"dog walking"}>Dog Walking</MenuItem>
            </Select>
          </FormControl>

          <InputLabel>Dates</InputLabel>
          <TextField
            required
            id="date-from"
            label="From"
            placeholder="yyyy-mm-dd"
          />
          <TextField
            required
            id="date-to"
            label="To"
            placeholder="yyyy-mm-dd"
          />
          <InputLabel>My pet's size</InputLabel>
          <FormControl fullWidth>
          <InputLabel>lbs</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="lbs"
              onChange={handleSize}
              sx={{mb: "10px"}}
            >
              <MenuItem value={"boarding"}>&lt; 10</MenuItem>
              <MenuItem value={"drop-in"}>10 - 15</MenuItem>
              <MenuItem value={"house sitting"}>15 - 20</MenuItem>
              <MenuItem value={"doggy daycare"}>&gt; 20</MenuItem>
            </Select>
            </FormControl>
          <Button variant="contained" type='submit'>Submit</Button>
        </Stack>
      </Container>
    </Card>
  );
};

export default Menu;
