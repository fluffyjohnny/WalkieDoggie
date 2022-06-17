import React, { useEffect } from "react";
import { Typography, Card, Button, Slider, Stack } from "@mui/material";
import axios from "axios";

const SearchByDistance = (props) => {
  const userLocation = props.center;

  const encodeMapCoord = (mapCoord) => {
    if (!mapCoord.location) {
      return;
    }

    const allCoordsString = encodeURIComponent(
      `${mapCoord.location.lat},${mapCoord.location.lng}`
    );
    return allCoordsString;
  };

  const getAllDistances = (mapCoords) => {
    const newMapCoordsObj = [...mapCoords];

    for (const obj in newMapCoordsObj) {
      const coordsString = encodeMapCoord(newMapCoordsObj[obj]);
      axios
        .get(
          `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation.lat}%2C${userLocation.lng}&destinations=${coordsString}&mode=walking&key=${process.env.REACT_APP_GMAPS_APIKEY}`
        )
        .then(({ data }) => {
          const timeToDestination = data.rows[0].elements[0].duration;
          newMapCoordsObj[obj].duration = timeToDestination;
        });
    }

    return newMapCoordsObj;
  };

  // get all walking durations for each dish, update if new user location is set
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAllDistances(props.dishesInfo);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [props.dishesInfo, props.center]);

  let sliderString = props.distance === 60 ? "+ minutes" : ` minutes`;

  return (
    <Card
      sx={{
        borderColor: "primary",
        mb: 3,
        backgroundColor: "info.main",
        py: 2,
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ px: 2 }}>
        <Button
          onClick={() =>
            props.setCenter({
              lat: 40.719344,
              lng: -74.003431,
            })
          }
          variant="contained"
          size="small"
          sx={{ mr: 2 }}
        >
          Find My Location
        </Button>
        <Stack
          direction="column"
          justifyContent="space-between"
          flexGrow={1}
          sx={{ px: 2 }}
        >
          <Stack direction="row" justifyContent="space-evenly">
            <Typography variant="subtitle2">
              Estimated {"  "}
            </Typography>
            
            <Typography variant="subtitle2">
              {`${props.distance}${sliderString}`}
            </Typography>
          </Stack>
          <Slider
            value={props.distance}
            onChange={(e) => props.setDistance(e.target.value)}
            max={60}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

export default SearchByDistance;
