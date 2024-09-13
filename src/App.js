import './App.css';
import Header from './components/header.js';
import MainText from './components/mainText.js';
import About from './components/about.js';
import Services from './components/services.js';
import Aval from './components/aval.js';

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
      <div className="bg-offWhite pt-20">
        <About />
      </div>
      <div className="bg-linkBlack pt-20">
        <Services />
      </div>
      <div className="bg-linkBlack pt-20">
        <Aval />
      </div>
    </>
  );
}

export default App;