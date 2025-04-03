import {Question, QuestionHeader} from "./styled";
import React from "react";
import {useLocation} from "react-router";

export const QuestionView = () => {

    const location = useLocation();
    console.log(location);

    return (
        <Question>
            <QuestionHeader>Исполнитель 1-1</QuestionHeader>
        </Question>
    )
}
