import { 
    ExistingPage,
    SetCurrentPage,
    SetIsLoggedIn
} from '..';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';

interface CurrentPageProps {
    currentPage : ExistingPage;
    setCurrentPage : SetCurrentPage;
    setIsLoggedIn : SetIsLoggedIn;
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
                <Home />
            );
        case 'About':
            return (
                <About />
            );
        case 'Dashboard':
            return (
                <Dashboard />
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
                <Home/>
            );
    }
};

export default CurrentPage;