import { PageProps } from "../..";
import { PageDiv } from '../styled';

const About = function AboutPageComponent({ setCurrentPage } : PageProps) {
    return (
        <PageDiv>
            <p>About</p>
        </PageDiv>
    );
};

export default About;
