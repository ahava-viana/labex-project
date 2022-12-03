import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm"
import { createTrip } from "../../services/requests"
import { ButtonsContainer, DivForm, ContainerForm } from "./styled"
import { planets } from '../../constants/planets'
import Header from '../../components/Header/Header'
import { Button } from '@mui/material'

const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onClickCreate = (e) => {
        e.preventDefault()
        createTrip(form, clear)
    }

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

    return (
        <div>
            <Header
            back={() => goBack(navigate)}
            home={() => goToHomePage(navigate)}/>
            <ContainerForm>
            <h1>Criar Viagem</h1>
            <DivForm>
            <form onSubmit={onClickCreate}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                    required
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    min={stringToday}
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    min={50}
                />
                <ButtonsContainer>
                  
                    <Button color="primary"
              size="large"
              variant="contained"
              margin="normal"
              type={"submit"}>Criar</Button>
                </ButtonsContainer>
            </form>
            </DivForm>
            </ContainerForm>
        </div>
    )
}

export default CreateTripPage
