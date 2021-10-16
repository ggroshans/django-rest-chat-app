
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Registration from './components/User/Registration/Registration'

function App() {

  function handleError(err) {
    console.warn(err)
  }

  function handleRegistration(userData) {
    const options = {
      method: "POST",
      header: {
        "Content-Type": 'application/json',
        "X-CSRFToken": Cookies.get('csrftoken'),
      },
      body: JSON.stringify(userData)
    }
    const response = await fetch('/rest-auth/registration/', options).catch(handleError)
    if (!response === true) {
      console.warn(response)
    } else {
      const data = response.json()
      Cookies.set(`Authorization`, `Token ${data.key}`)
    }
  }



  return (
    <div className="App">
        <Header />
        {/* <Main /> */}
        <Registration handleRegistration={handleRegistration}/>
        <Footer />
    </div>
  );
}

export default App;
