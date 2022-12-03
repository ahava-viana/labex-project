import styled from "styled-components"

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 50px 0 10px 0;
`
export const DivList = styled.div`
    display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  height: 80%;
  justify-content: center;
  padding-bottom: 30px;

`
export const TripList = styled.div`
 position: relative;
  top: 5%;
  overflow-y: scroll;
  width: 50%;
  border:solid 1px #F8F8FF;
  height: 100%;
 
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
// export const ListScreenContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 500px;
// `