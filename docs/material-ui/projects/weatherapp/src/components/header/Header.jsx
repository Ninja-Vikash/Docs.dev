import React from "react";
import { Container } from "@mui/material";
import Logo from "./Logo";
import Toggler from "./Toggler";
import Clock from "./Clock";

function Header({ toggleTheme }) {
  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Logo />

      <Clock />

      <Toggler toggleTheme={toggleTheme} />
    </Container>
  );
}

export default Header;
