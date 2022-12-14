import './App.css';

import Info from './components/Info';
import Main from './components/Main';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <Info />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
