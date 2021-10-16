
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Registration from './components/User/Registration/Registration'

function App() {
  return (
    <div className="App">
        <Header />
        {/* <Main /> */}
        <Registration/>
        <Footer />
    </div>
  );
}

export default App;
