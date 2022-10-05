import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCrypto } from "../api/api";
import CryptoInfo from "../components/CryptoInfo";
import { CryptoState } from "../CryptoContext";

const Chart = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCrypto(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="containerChart">
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className="heading">
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className="description">
          {coin?.description.en.split(". ")[0]}.
        </Typography>
      </div>

      <CryptoInfo coin={coin} />
    </div>
  );
};

export default Chart;
