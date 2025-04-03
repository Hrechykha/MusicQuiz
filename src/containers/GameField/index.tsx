import {
    GameContainer,
    GameTable,
    QuestionsContainer,
    QuestionTd,
    TourNameTd,
    ToursContainer
} from "./styled";
import React from "react";
import {useNavigate} from "react-router";

export const GameField = () => {
    const navigate = useNavigate()
    const handleQuestionButtonClick = (event) => {
        console.log(event.target);
        console.log(event.target.dataset.questionId);
        // navigate(`question/${event.target.dataset.questionId}`);
        navigate('question', {state:{id:event.target.dataset.questionId}});

    }


    return (
        <GameContainer>
            <ToursContainer>
                <GameTable>
                    <tr>
                        <TourNameTd>Зарубежные исполнители</TourNameTd>
                    </tr>
                    <tr>
                        <TourNameTd>Зарубежные группы</TourNameTd>
                    </tr>
                    <tr>
                        <TourNameTd>Рок</TourNameTd>
                    </tr>
                </GameTable>
            </ToursContainer>

            <QuestionsContainer>
                <GameTable onClick={handleQuestionButtonClick}>
                    <tr>
                        <QuestionTd data-question-id="1-1">100</QuestionTd>
                        <QuestionTd>200</QuestionTd>
                        <QuestionTd>300</QuestionTd>
                    </tr>
                    <tr>
                        <QuestionTd>100</QuestionTd>
                        <QuestionTd>200</QuestionTd>
                        <QuestionTd>300</QuestionTd>
                    </tr>
                    <tr>
                        <QuestionTd>100</QuestionTd>
                        <QuestionTd>200</QuestionTd>
                        <QuestionTd>300</QuestionTd>
                    </tr>
                </GameTable>
            </QuestionsContainer>
        </GameContainer>

    )
}
