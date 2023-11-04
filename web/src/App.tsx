import { useState } from "react";
import { useCookies } from "react-cookie";

import config from "./lib/config";
import MainPage from "./components/MainPage";
import Widget from "./components/Widget";


const App = function () {
    const [cookies, setCookie, removeCookie] = useCookies([config.sessionToken.cookieName, config.user.id.cookieName]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <MainPage 
                setCookie={ setCookie }
                setIsLoggedIn={ setIsLoggedIn }
                cookies={ cookies }
                isLoggedIn={ isLoggedIn }
            />
            <Widget 
                cookies={ cookies }
                isLoggedIn={ isLoggedIn }
            />
        </>
    );
};

export default App;