import "./App.scss";
import Navbar from './components/Nav';
import Login from './components/LoginRegistro';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (

    <>
     <Navbar /> 
     <Home/>
    <Footer/>

    {/* <Login/>  */}
    </>
  );
}

export default App;
