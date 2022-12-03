import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToCreateTripPage, goToHomePage } from "../../routes/coordinator";
import { logout } from "../../services/requests";
import {
  
  ButtonsContainer,
  ContainerAdmHome,
} from "./styled";
import useRequestData from "../../hooks/useRequestData";
import AdminTripCard from "../../components/AdminTripCard/AdminTripCard";
import Header from "../../components/Header/Header";
import { Button } from "@mui/material";

const AdminHomePage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [tripsData, getTrips] = useRequestData("/trips", {});

  const tripsList =
    tripsData.trips &&
    tripsData.trips.map((t) => {
      return (
        <AdminTripCard key={t.id} name={t.name} id={t.id} getTrips={getTrips} />
      );
    });

  return (
    <>
      <Header
        back={() => goToHomePage(navigate)}
        home={() => goToHomePage(navigate)}
      />
      <ContainerAdmHome>
        <h1>Painel Administrativo</h1>
        <ButtonsContainer>
          <Button variant="contained" onClick={() => goToCreateTripPage(navigate)}>
            Criar Viagem
          </Button>
          <Button variant="contained" onClick={() => logout(navigate)}>Logout</Button>
        </ButtonsContainer>

        {tripsList && tripsList.length > 0 ? tripsList : <p>Caregando...</p>}
      </ContainerAdmHome>
    </>
  );
};

export default AdminHomePage;
