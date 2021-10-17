import Cookies from 'js-cookie';
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Registration from "./components/User/Registration/Registration";
import Splash from "./components/User/Splash"
import Login from "./components/User/Login/Login"
import { useState } from 'react';


function App() {

const [userSplash, setUserSplash] = useState('splash')

  async function handleRegistration(userData) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(userData),
        }
        const response = await fetch("/rest-auth/registration/", options)
        try {
            const data = await response.json();
            console.log(data)
            Cookies.set(`Authorization`, `Token ${data.key}`);
        } catch (error) {
          console.error(error)
        }
    }

    function changeSplash(val) {
      setUserSplash(val);
    }
    console.log(userSplash)

    let body;
    switch (userSplash) {
      case 'splash':
        body = <Splash changeSplash={changeSplash}/>
        break;
      case 'register':
        body = <Registration handleRegistration={handleRegistration} />
        break;
      case 'login':
        body = <Login />
        break;
      case 'chat':
        body = <Main />
        break;
    }

    return (
        <div className="App">
            <Header />
            {body}  
            <Footer />
        </div>
    );
}

export default App;
