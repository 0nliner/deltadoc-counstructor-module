import './App.css';
import {WordLikeEditor} from "./WordLikeEditor";


function App() {
  return (
    <div className="App">
        <div style={{top: 70, left: 50, position: "relative"}}>
            <WordLikeEditor/>
        </div>
    </div>
  );
}

export default App;
