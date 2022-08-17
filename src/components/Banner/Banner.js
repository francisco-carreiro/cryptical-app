import { Container, Typography } from "@mui/material";
import Carousel from "./Couresel";

import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagline">
          <img className="coinLogo" src="/coinLogo.png" alt="cryptical coin" />
          <Typography
            variant="subtitle1"
            style={{
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 400,
            }}
          >
            All the information about your cryptos in one place!
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
