import React from "react"
import { CardContainer, ButtonsContainer } from './styled'
import { decideCandidate } from '../../services/requests'
import { Button } from "@mui/material"

const CandidateCard = (props) => {
    const { id, applicationText, profession, age, name, country } = props.candidate

    const decide = (decision) => {
        decideCandidate(props.tripId, id, decision, props.getTripDetails)
    }

    return (
        <CardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            <ButtonsContainer>
                <Button color="success" variant="contained" size="small"  onClick={() => decide(true)}>Aprovar</Button>
                <Button variant="contained" size="small" color="error" onClick={() => decide(false)}>Reprovar</Button>
            </ButtonsContainer>

        </CardContainer>
    )
}

export default CandidateCard