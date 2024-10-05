import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './Title';
import AnimalList from './AnimalList';
import AnimalMap from './AnimalMap';
import Explain from './Explain';


const App = () => {
    return (
        <Router>
            <div>
                <Title />
                <Explain/>
                <AnimalList/>
                <Routes>
                    <Route path="/zoo-search/:animal" element={<AnimalMap />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
