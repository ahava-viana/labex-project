import axios from "axios"
import { BASE_URL } from '../constants/url'
import { goToAdminHomePage, goToLoginPage } from '../routes/coordinator'

export const sendApplication = (body, tripId, clear) => {
    axios.post(`${BASE_URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Aplicação enviada com sucesso!")
            clear()
        })
        .catch((err) => alert(err.response.message))
}

export const login = (body, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log("passo1")
            localStorage.setItem("token", res.data.token)
            console.log("passo2")
            alert("Usuário logado!")
            goToAdminHomePage(navigate)
            console.log("entrei aqui")
        })
        .catch((err) => alert(err.response.data.message))
}

export const logout = (navigate) => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}

export const deleteTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") }
    })
    .then(() => {
        alert("Viagem deletada com sucesso!")
        getTrips()
    })
    .catch((err) => alert(err.response.data.message))
}

export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Decisão registrada com sucesso!")
        getTripDetails()
    })
    .catch((err) => alert(err.response.data.message))
}

export const createTrip = (body, clear) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Viagem adicionada com sucesso!")
        clear()
    })
    .catch((err) => alert(err.response.data.message))
}