import styled from "styled-components";

export const TeamsContainer = styled.div`
  background-color: #79afb0;
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const TeamsTable = styled.table`
  border-collapse: separate;
  border-spacing: 30px;
  width: 100%;
`
export const AddTeamButton = styled.button`
  margin-top: 550px;
  width: 190px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 15px;
  position: fixed;

  &:hover {
    background-color: #9bd4c4;
  }
`

export const TeamNameInput = styled.input`
  margin-top: 10px;
  width: 190px;
  height: 25px;
  background-color: #fac3cc;
`

export const TeamsTableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  background: #faa7b5;
  font-family: Gill Sans, sans-serif;
`;