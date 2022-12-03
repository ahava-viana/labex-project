import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goBack, goToHomePage } from "../../routes/coordinator";
import CandidateCard from "../../components/CandidateCard/CandidateCard.jsx";
import { DivList, ContainerDetails, ContainerList, DivListTrip } from "./styled";
import Header from "../../components/Header/Header";

const TripDetailsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { id } = useParams();
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`);

  const candidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.candidates.map((c) => {
      return (
        <CandidateCard
          key={c.id}
          candidate={c}
          tripId={id}
          getTripDetails={getTripDetails}
        />
      );
    });

  const approvedCandidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.approved.map((c) => {
      return <li key={c.id}>{c.name}</li>;
    });

  return (
    <>
      
      <Header
        back={() => goBack(navigate)}
        home={() => goToHomePage(navigate)}
      />
      
     
   
      <ContainerDetails>
        <ContainerList>
        {/* {tripDetails && tripDetails.trip && <h5>{tripDetails.trip.name}</h5>} */}
        <DivListTrip>
          <h5>Lista de Viagens</h5>

          {tripDetails && tripDetails.trip && (
            <DivList>
              <p>
                <b>Nome:</b> {tripDetails.trip.name}
              </p>
              <p>
                <b>Descrição:</b> {tripDetails.trip.description}
              </p>
              <p>
                <b>Planeta:</b> {tripDetails.trip.planet}
              </p>
              <p>
                <b>Duração:</b> {tripDetails.trip.durationInDays}
              </p>
              <p>
                <b>Data:</b> {tripDetails.trip.date}
              </p>
            </DivList>
          )}
        </DivListTrip>
        </ContainerList>

       <ContainerList> 
       <DivListTrip> 
        <h5>Candidatos Pendentes</h5>
        {candidates && candidates.length > 0 ? (
          candidates
        ) : (
          <p>Não há candidatos pendentes</p>
          
        )}
        </DivListTrip>
        </ContainerList>


        <ContainerList>
        <DivListTrip>
        <h5>Candidatos Aprovados</h5>
        {approvedCandidates && approvedCandidates.length > 0 ? (
          approvedCandidates
        ) : (
          <p>Não há candidatos aprovados</p>
        )} 
         </DivListTrip>
        </ContainerList>
      </ContainerDetails>
 
    </>
  );
};

export default TripDetailsPage;
