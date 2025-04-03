import { createRoot } from 'react-dom/client';
import {GameField} from "./containers/GameField";
import {TeamsField} from "./containers/TeamsField";
import {StyledDiv} from "./styled";
import {
    HashRouter as Router,
    Route, Routes
} from "react-router";
import {QuestionView} from "./containers/QuestionView";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GameField/>} />
                {/*<Route path="question/:id" element={<QuestionView/>} />*/}
                <Route path="question" element={<QuestionView/>} />
            </Routes>
        </Router>
    );
}
const renderApp = () => {
    const root = createRoot(document.getElementById("app"));
    root.render(<StyledDiv><App/><TeamsField/></StyledDiv>);
}

renderApp();