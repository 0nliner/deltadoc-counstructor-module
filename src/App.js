import { Container } from '@material-ui/core';
import './App.css';
import {WordLikeEditor} from "./WordLikeEditor";


function App() {
  return (
    <div>
        <Container style={{padding: 10}}>
            <WordLikeEditor/>
        </Container>
    </div>
  );
}

export default App;
