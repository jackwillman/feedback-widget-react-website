import { 
    PageDiv,
    BigText,
    NormalText 
} from '../styled';
import {     
    AboutTextDiv,
    AboutNormalTextDiv
} from './styled';

const About = function AboutPageComponent() {
    return ( <PageDiv>
        <AboutTextDiv>
            <BigText>
                We do exist!
            </BigText>
            
            <AboutNormalTextDiv>
                <NormalText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate. 
                    At risus viverra adipiscing at. Malesuada bibendum arcu vitae elementum curabitur vitae nunc 
                    sed velit. Dolor morbi non arcu risus quis varius quam quisque. Eu scelerisque felis imperdiet 
                    proin fermentum leo.</p>
                    <br />
                    <p>Phasellus egestas tellus rutrum tellus. Aenean pharetra magna ac placerat 
                    vestibulum lectus mauris. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. 
                    Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vitae congue eu 
                    consequat ac. Enim tortor at auctor urna nunc id cursus. Rutrum tellus pellentesque eu 
                    tincidunt tortor aliquam nulla facilisi. Consequat mauris nunc congue nisi vitae 
                    suscipit tellus. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.</p>
                </NormalText>
            </AboutNormalTextDiv>
        </AboutTextDiv>
    </PageDiv> );
};

export default About;
