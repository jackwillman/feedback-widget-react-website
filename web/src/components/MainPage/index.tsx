import { useState } from 'react';

import PageHeader from './PageHeader';
import CurrentPage from './CurrentPage';

import styled from './styled';

export type ExistingPage = 'Home' | 'About' | 'Dashboard';

export interface PageProps {
    setCurrentPage : (page : ExistingPage) => void;
};

const MainPage = function MainPageComponent() {
    const [currentPage, setCurrentPage] = useState<ExistingPage>('Home');

    return <styled.MainDiv>
        <PageHeader setCurrentPage={ setCurrentPage } />
        <CurrentPage 
            currentPage={ currentPage }
            setCurrentPage={ setCurrentPage }
        />
    </styled.MainDiv>
};

export default MainPage;


// main page alterna entre estados entre App, About us e Dashboard