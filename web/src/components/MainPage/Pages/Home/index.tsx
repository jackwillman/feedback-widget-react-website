import { PageProps } from '../..';
import { PageDiv } from '../styled';

const Home = function HomePageComponent({ setCurrentPage } : PageProps) {
    return (
        <PageDiv>
            <p>Let's change the world together</p>
            <p>Everybody deserves better</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </PageDiv>
    );
};

export default Home;
