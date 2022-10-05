import { Container } from "@mui/material";
import Carousel from "./Couresel";

import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
