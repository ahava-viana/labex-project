import React from "react"
import { CardContainer, DeleteButton } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToTripDetailsPage } from '../../routes/coordinator'
import { deleteTrip } from '../../services/requests'


const AdminTripCard = (props) => {
    const { id, name, getTrips } = props
    const navigate = useNavigate()

    const onClickDelete = (e) => {
        e.stopPropagation()
        if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
            deleteTrip(id, getTrips)
        }
    }

    return (
        <CardContainer onClick={() => goToTripDetailsPage(navigate, id)}>
            <p>{name}</p>
            <DeleteButton onClick={onClickDelete}/>
        </CardContainer>
    )
}

export default AdminTripCard