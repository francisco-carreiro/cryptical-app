/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars, react-hooks/rules-of-hooks*/

import { CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../api/api.js";
import { CryptoState } from "../CryptoContext";

const CryptoInfo = ({ coin }) => {
  const [dateData, setDateData] = useState();

  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const fetchDateData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setDateData(data.prices);
  };

  useEffect(() => {
    fetchDateData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="containerGraph">
        {!dateData ? (
          <CircularProgress
            style={{ color: "#2e9dffaf" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: dateData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: dateData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days) in ${currency}`,
                    borderColor: "red",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
export default CryptoInfo;
