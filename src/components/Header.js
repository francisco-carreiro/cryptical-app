import { AppBar, MenuItem, Select, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <img
              className="logo"
              src="/logo.png"
              alt="logo"
              onClick={() => navigate("/")}
            />
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"THB"}>THB</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
