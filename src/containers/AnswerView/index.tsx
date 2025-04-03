import {Answer, AnswerHeader} from "./styled";
import React from "react";
import {useLocation} from "react-router";

export const AnswerView = () => {

    const location = useLocation();
    console.log(location);

    return (
        <Answer>
            <AnswerHeader>Исполнитель 1-1</AnswerHeader>
        </Answer>



    )
}
