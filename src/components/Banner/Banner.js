import { Container, Typography } from "@mui/material";

import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Oswald, sans-serif",
            }}
          >
            CRYPTO EYE
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "Oswald, sans-serif",
            }}
          >
            All the information about your cryptos in one place!
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
