import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingCrypto } from "../../api/api";
import { CryptoState } from "../../CryptoContext";

const Couresel = () => {
  const [trending, setTrending] = useState([]);

  const { currency } = CryptoState();

  const fetchTrendingCrypto = async () => {
    const { data } = await axios.get(TrendingCrypto(currency));

    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCrypto();
  }, [currency]);

  return <div className="carousel">Couresel</div>;
};

export default Couresel;
