import React from 'react'
import TripCard from "../../components/TripCard/TripCard"
import useRequestData from "../../hooks/useRequestData"
import { goToApplicationFormPage } from '../../routes/coordinator'
import { goBack, goToHomePage } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom'
import {  DivList, TripList } from "./styled"
import Header from '../../components/Header/Header'
import { Button } from '@mui/material'



const ListTripsPage = () => {
    const [tripsData] = useRequestData("/trips", {})
    const navigate = useNavigate()

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <TripCard key={t.id} trip={t} />
    })

    return (
        <div>
            <Header  back={() => goBack(navigate)}
        home={() => goToHomePage(navigate)}/>


        
            
               
               
            <DivList>
            <h1>Lista de Viagens</h1>
            <TripList>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
            </TripList>
            <Button color="primary"
              size="large"
              variant="contained"
              margin="normal"  onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</Button >
            
            </DivList>
           
       
        </div>
    )
}

export default ListTripsPage