import { LinearProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCrypto } from "../api/api";
import { numberWithCommas } from "../components/Banner/Couresel";
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

  const rawHTML = coin?.description.en.split(". ")[0] + ".";

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "#2e9dffaf" }} />;

  return (
    <div className="containerChart">
      <div className="sidebar">
        <img
          className="chartPicture"
          src={coin?.image.large}
          alt={coin?.name}
        />
        <Typography variant="h3" className="heading">
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className="description">
          <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
        </Typography>
        <div className="marketData">
          {/* Ranking */}
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="heading">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Oswald" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>

          {/* Current Price */}
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="heading">
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Oswald" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          {/* Market Cap */}
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="heading">
              Market Cap:{" "}
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Oswald" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>

      {/* Chart */}
      <CryptoInfo coin={coin} />
    </div>
  );
};

export default Chart;
