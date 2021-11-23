import Cookies, { set } from "js-cookie";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Registration from "./components/User/Registration/Registration";
import Splash from "./components/User/Splash";
import Login from "./components/User/Login/Login";
import { useState, useEffect } from "react";

function App() {
    const [userStatus, setUserStatus] = useState("splash");
    const [isAuth, setIsAuth] = useState(false);
    const [currentUser, setCurrentUser] = useState()

    useEffect( ()=> {
        const checkAuth = async () => {
            const response = await fetch('/rest-auth/user/');
            const data = await response.json()
            setCurrentUser(data);
            if (response.ok === false) {
                setUserStatus("splash")
            }
            else {
                setUserStatus("approved")
            }
        }
        checkAuth();
    }, [ ,isAuth])

    async function handleRegistration(userData) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch("/rest-auth/registration/", options);
        try {
            const data = await response.json();
            console.log(data);
            Cookies.set(`Authorization`, `Token ${data.key}`);
            setUserStatus("approved");
        } catch (error) {
            console.error(error);
        }
    }

    async function handleLogin(userData) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch("/rest-auth/login/", options);
        if (response.ok === true) {
            const data = await response.json();
            Cookies.set(`Authorization`, `Token ${data.key}`);
            setUserStatus("approved");
            
        } else {
            console.error(response.statusText);
        }
    }

    function changeStatus(val) {
        setUserStatus(val);
    }

    console.log("user status", userStatus)

    let body;
    switch (userStatus) {
        case "splash":
            body = <Splash changeStatus={changeStatus} />;
            break;
        case "register":
            body = <Registration handleRegistration={handleRegistration} changeStatus={changeStatus}/>;
            break;
        case "login":
            body = <Login handleLogin={handleLogin} changeStatus={changeStatus} isAuth={isAuth}/>;
            break;
        case "approved":
            body = <Main currentUser={currentUser}/>;
            break;
    }

    

    return (
        <div className="App">
            <Header changeStatus={changeStatus} userStatus={userStatus}/>
            {body}
            <Footer />
        </div>
    );
}

export default App;
