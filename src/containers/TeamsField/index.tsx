import {TeamsContainer, AddTeamButton, TeamsTable, TeamsTableCell, TeamNameInput} from "./styled";
import React, {useState} from "react";

export const TeamsField = () => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tableData, setTableData] = useState([]);

    const handleButtonClick = () => {
        setShowInput(true);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSave = () => {
        if (inputValue.trim() !== '') {
            setTableData([...tableData, inputValue]);
            setInputValue('');
            setShowInput(false);
        }
    };

    return (
        <TeamsContainer>
            <TeamsTable>
                {tableData.map((item, index) => (
                    <tr key={index}>
                        <TeamsTableCell>{item}</TeamsTableCell>
                    </tr>
                ))}
            </TeamsTable>

            <AddTeamButton onClick={handleButtonClick}>Добавить команду</AddTeamButton>
            {showInput && (
                <div>
                    <TeamNameInput type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleSave}>Сохранить</button>
                </div>
            )}

        </TeamsContainer>
    );
};
export default TeamsField;


