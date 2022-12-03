import styled from "styled-components";
import background from "../../assets/background.jpg";

export const ContainerHome = styled.div`
  background-image: url(${background});
  background-repeat: round;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const ContainerTextImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  div {
    margin-bottom: 80px;
    border-radius: 10%;
    width: 50vw;
    height: 40vh;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ButtonsContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
