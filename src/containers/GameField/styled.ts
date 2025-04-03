import styled from "styled-components";
export const GameContainer = styled.div`
  display: flex;
  width: 75%;
  background: linear-gradient(15deg, #376e6f, #da7b93, #4a1723);
`
export const ToursContainer = styled.div`
  width: 30%;
  font-family: Gill Sans, sans-serif;
`

export const QuestionsContainer = styled.div`
  width: 70%;
`
export const GameTable = styled.table`
  border-collapse: separate;
  border-spacing: 30px;
  width: 100%;
`

export const TourNameTd = styled.td`
  border: 1px solid #000;
  text-align: center;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  background: #faa7b5;
  font-size: 20px;
`

export const QuestionTd = styled.td`
  font-family: Marker Felt, fantasy;
  text-align: center;
  font-size: 20px;
  background: #519c8a;
  width: 200px;
  height: 52px;
  border-radius: 15px;

  &:hover {
    background-color: #9bd4c4;
  }
`
