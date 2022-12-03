import React from "react";
import logo from "../../assets/Logo.png";
import { AppBar, Button, Box } from "@mui/material";
import { StyledToolbar } from "./styled";
import { ContainerLogo, ContainerButton } from "./styled";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <ContainerLogo>
            <img src={logo} alt="logo"></img>
            <h1>LabeX</h1>
          </ContainerLogo>

          <ContainerButton>
            <Button
              onClick={props.home}
              color="inherit"
              size="large"
              variant="outlined"
              sx={{ mr: 2 }}
            >
              Home
            </Button>
            <Button
              onClick={props.back}
              color="inherit"
              size="large"
              variant="outlined"
            >
              Voltar
            </Button>
          </ContainerButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
