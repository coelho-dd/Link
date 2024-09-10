import './App.css';
import Header from './components/header.js';
import MainText from './components/mainText.js';

function App() {
  return (
    <>
      <div className="bg-linkBlack min-h-screen flex flex-col">
        <div className="App">
            <Header />
          </div>

          <div>
            <MainText />
          </div>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;