import './App.css';
import ShowResult from './ShowResult';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import TodosPage from './TodosPage';

function App() {
  return (
    <>
      <Provider store = { store }>
        <div className="App">
          <header className="App-header">
            <ShowResult/>
            <br></br>
            <TodosPage/>
          </header>
        </div>
      </Provider>
    </>
  );
}

export default App;
