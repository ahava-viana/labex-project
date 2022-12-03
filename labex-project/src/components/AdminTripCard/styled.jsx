import styled from "styled-components"
import DeleteIcon from '@mui/icons-material/Delete';

export const CardContainer = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px ;
    align-items: center;
    justify-content: space-between;
    width: 460px;
    &:hover{
        cursor: pointer;
        background-color: #b6d4e3;
    }
`

export const DeleteButton = styled(DeleteIcon)`
    padding: 10px;
    color: slategray;
    &:hover{
        cursor: pointer;
        background-color: #d1e4ed;
        border-radius: 24px;
        color: darkred;
    }
`