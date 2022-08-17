import {
  Container,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CryptoList } from "../api/api";
import { CryptoState } from "../CryptoContext";

const CryptoTable = () => {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { currency } = CryptoState();

  const fetchCrypto = async () => {
    setLoading(true);
    const { data } = await axios.get(CryptoList(currency));

    setCrypto(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCrypto();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleSearch = () => {
    return crypto.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Oswald, sans-serif" }}
        >
          Market Prices
        </Typography>
        <TextField
          label="Search Crypto Currencies"
          variant="filled"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "dodgerblue" }} />
          ) : (
            <Table>
              <TableHead
                style={{
                  backgroundColor: "dodgerblue",
                  color: "white",
                }}
              >
                <TableRow>
                  {["Coin", "Price", "24 Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "darkblue",
                        fontWeight: "700",
                        fontFamily: "Oswald, sans-serif",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {handleSearch().map((row) => {
                  const profit = row.price_change_percentage_24h > 0;

                  return (
                    <TableRow
                      onClick={() => navigate("/Chart/${row.id}")}
                      className="row"
                      key={row.name}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          display: "flex",
                          gap: 15,
                        }}
                      >
                        <img
                          src={row?.image}
                          alt={row.name}
                          height="45"
                          style={{ marginBottom: 10 }}
                        />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span
                            style={{ textTransform: "uppercase", fontSize: 22 }}
                          >
                            {row.symbol}
                          </span>
                          <span style={{ color: "darkgray" }}>{row.name}</span>
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: profit > 0 ? "limegreen" : "red",
                          fontWeight: 700,
                        }}
                      >
                        {profit && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CryptoTable;
