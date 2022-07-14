import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div id="page-wrap">
        <h1>AppDividend</h1>
        <h2>Check out our tutorials the side menubar</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
