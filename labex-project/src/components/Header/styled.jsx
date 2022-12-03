import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar"

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerLogo = styled.div`
    display: flex;
align-items: center;
img{
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-right: 20px;
}
`
export const ContainerButton = styled.div`
margin-right: 30px;

`