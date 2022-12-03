import styled from "styled-components"

export const ContainerForm = styled.div`
 display: flex;
    
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`

export const DivForm = styled.div`
 display:flex;
  flex-direction: column;
 align-items: center;
  justify-content: center;
  align-content: center;
 
  form{
   
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;

  }
  select{
   
  width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: #6f00ff;
    margin: 0 0 15px 0;

  }
  input{
    
  width: 97%;
    height: 30px;
    border-radius: 4px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: #6f00ff;
    margin: 0 0 15px 0;

  }
  option{
    border: 5px solid ;
  border-radius: 4px;
  
  width: 100%;
  }

`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 20px 0 0 0;
`