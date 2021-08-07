import { Container } from '@material-ui/core';
import './App.css';
import {WordLikeEditor} from "./WordLikeEditor";
import {EditorReducer} from "./redux/reducers";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";


function App() {
  return (
      <Provider store={createStore(combineReducers({EditorReducer}))}>
        <div>
            <Container style={{padding: 10}}>
                <WordLikeEditor/>
            </Container>
        </div>
      </Provider>
  );
}

export default App;
