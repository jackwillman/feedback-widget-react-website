import { useState } from 'react';

import PageHeader from './PageHeader';
import CurrentPage from './CurrentPage';

import { MainDiv } from './styled';


export type ExistingPage = 'Home' | 'About' | 'Dashboard';

export interface PageProps {
    setCurrentPage : (page : ExistingPage) => void;
};

const MainPage = function MainPageComponent() {
    const [currentPage, setCurrentPage] = useState<ExistingPage>('Home');

    return (
        <MainDiv>
            <PageHeader setCurrentPage={ setCurrentPage } />
            <CurrentPage 
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
            />
        </MainDiv>
    );
};

export default MainPage;