import styled from "styled-components"



export const ContainerDetails = styled.div`
  display:flex;
  flex-direction: row;
  color: black;
  margin-top: 30px;
`

export const ContainerList= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  
`
export const DivListTrip= styled.div`
  position: relative;
  top:20px;
  overflow-y: scroll;
  width: 55%;
  border:solid 1px "#6f00ff";
  height: 400px;
  padding-right: 15px;
  padding-bottom: 20px;
  color:black;
  h5{
display: flex;
justify-content: center;
  }
`

export const DivList= styled.div`
  border:solid 1px white;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 15px;
  background-color:white; 
  color: black;
`


