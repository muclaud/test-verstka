import {
  BrowserRouter as Router,
} from 'react-router-dom'

import './App.css'
import Header from './blocks/Header';
import Main from './blocks/Main';
import Footer from './blocks/Footer';
import MainTop from './blocks/MainTop';


function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <MainTop />
        <Main />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
