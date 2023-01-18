import './App.css'

import {Simpsons} from "./components/Simpsons/Simpsons";
import {RickAndMortyaCharacters} from "./components/RickAndMortyaCharacters/RickAndMortyaCharacters";

const App = () => {
    return (
        <div className={'App'}>
            <Simpsons/>
            <RickAndMortyaCharacters/>
        </div>
    );
};

export default App;