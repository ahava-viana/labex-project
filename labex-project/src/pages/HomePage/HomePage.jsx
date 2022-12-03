import React from "react";
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {ContainerHome,ContainerTextImg,ButtonsContainer } from "./styled";
import { Button } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
     

      <ContainerHome>
      <ContainerTextImg>
        <div>
        <h3>
          A LabeX é a primeira agência de viagens intergalácticas que te leva
          para conhecer o espaço!{" "}
        </h3>
        <p>
          {" "}
          Destinos incríveis com preço que cabe no seu bolso.
          <p>Não perca mais tempo e comece a planejar sua viagem dos sonhos!</p>
       
        </p>

        </div>
        </ContainerTextImg>
      

      <ButtonsContainer>
        <Button color="primary"
              size="large"
              variant="contained" onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
        <Button color="primary"
              size="large"
              variant="contained"  onClick={() => goToLoginPage(navigate)}>Área de Admin</Button>
      </ButtonsContainer>
      </ContainerHome>
    </>
  );
};

export default HomePage;
