import { ExistingPage } from '..';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';

interface CurrentPageProps {
    currentPage : ExistingPage;
    setCurrentPage : (page : ExistingPage) => void;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
};

const CurrentPage = function SwitchCaseToGetCurrentPage(
    {
        currentPage,
        setCurrentPage,
        setIsLoggedIn
    } : CurrentPageProps
) {
    switch (currentPage) {
        case 'Home':
            return (
                <Home 
                    setCurrentPage={ setCurrentPage }
                />
            );
        case 'About':
            return (
                <About 
                    setCurrentPage={ setCurrentPage }
                />
            );
        case 'Dashboard':
            return (
                <Dashboard 
                    setCurrentPage={ setCurrentPage }
                />
            );
        case 'Login':
            return (
                <Login
                    setCurrentPage={ setCurrentPage }
                    setIsLoggedIn={ setIsLoggedIn }
                />
            )
        default:
            return (
                <Home 
                    setCurrentPage={ setCurrentPage }
                />
            );
    }
};

export default CurrentPage;