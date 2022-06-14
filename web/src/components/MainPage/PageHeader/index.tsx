import { PageProps } from '..';

import styled from './styled';

const PageHeader = function PageHeaderComponent({ setCurrentPage } : PageProps) {
    return <div>
        <button
            onClick={() => setCurrentPage('Home')}
        >
            BetterSite
        </button>
        <styled.RightButtonsDiv>
            <styled.RightButton
                onClick={() => setCurrentPage('About')}
            >
                About
            </styled.RightButton>
            <styled.RightButton
                onClick={() => setCurrentPage('Dashboard')}
            >
                Dashboard
            </styled.RightButton>
        </styled.RightButtonsDiv>
    </div>
};

export default PageHeader;
