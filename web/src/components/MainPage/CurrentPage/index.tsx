import { ExistingPage } from '..';
import Home from '../../Home';
import About from '../../About';
import Dashboard from '../../Dashboard';

interface CurrentPageProps {
    currentPage : ExistingPage;
    setCurrentPage : (page : ExistingPage) => void;
};

const CurrentPage = function SwitchCaseToGetCurrentPage(
    {
        currentPage,
        setCurrentPage
    } : CurrentPageProps
) {
    switch (currentPage) {
        case 'Home':
            return <Home 
                setCurrentPage={ setCurrentPage }
            />;
        case 'About':
            return <About 
                setCurrentPage={ setCurrentPage }
            />;
        case 'Dashboard':
            return <Dashboard 
                setCurrentPage={ setCurrentPage }
            />;
        default:
            return <Home 
                setCurrentPage={ setCurrentPage }
            />;
    }
};

export default CurrentPage;