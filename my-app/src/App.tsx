import './App.css';
import Content from './components/Content';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import DoubleContent from './components/DoubleContent';

function App() {
  return (
    <>
      <Provider store = { store }>
        <div className="App">
          <header className="App-header">
            <Content/>
          </header>
        </div>
        <div className="App">
          <div className="App-header">
            <DoubleContent/>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;



