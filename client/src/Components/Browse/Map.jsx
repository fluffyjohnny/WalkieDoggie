import React, { Fragment, useState, useEffect } from "react";
import { Card } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "66vh",
};

const center = {
  lat: 49.30444,
  lng: -123.14392,
};

function Map() {
  return (
    <Card
      sx={{
        padding: "15px",
        borderColor: "primary.main",
        backgroundColor: "info.main",
      }}
    >
      <Card>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GMAPS_APIKEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </Card>
    </Card>
  );
}

export default Map;
