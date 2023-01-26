import React from "react";
import useForm from "../../hooks/useForm";
import { login } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { ButtonsContainer, ContainerForm, DivForm } from "./styled";

import { goBack, goToHomePage } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import { Button } from "@mui/material";

const LoginPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, onChange } = useForm({ email: "", password: "" });

  const onClickLogin = (e) => {
    e.preventDefault();
    login(form,  navigate);
  };

  return (
    <>
      <Header
        back={() => goBack(navigate)}
        home={() => goToHomePage(navigate)}
      />
      <ContainerForm>
      <h1>Login</h1>
      <DivForm>
      <form onSubmit={onClickLogin}>
        <input
          placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <ButtonsContainer>
          <Button 
          type="submit"
          color="primary"
              size="large"
              variant="contained"
              margin="normal" >Entrar</Button >
        </ButtonsContainer>
      </form>
      </DivForm>
      </ContainerForm>
    </>
  );
};

export default LoginPage;
