import { PageProps } from "../..";

import { 
    PageDiv,
    BigText,
    NormalText 
} from '../styled';
import {     
    AboutTextDiv,
    AboutNormalTextDiv
} from './styled';

const About = function AboutPageComponent({ setCurrentPage } : PageProps) {
    return (
        <PageDiv>
            <AboutTextDiv>
                <BigText>
                    We are a company.
                </BigText>
                
                <AboutNormalTextDiv>
                    <NormalText> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate. 
                        At risus viverra adipiscing at. Malesuada bibendum arcu vitae elementum curabitur vitae nunc 
                        sed velit. Dolor morbi non arcu risus quis varius quam quisque. Eu scelerisque felis imperdiet 
                        proin fermentum leo. Phasellus egestas tellus rutrum tellus. Aenean pharetra magna ac placerat 
                        vestibulum lectus mauris. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. 
                        Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vitae congue eu 
                        consequat ac. Enim tortor at auctor urna nunc id cursus. Rutrum tellus pellentesque eu 
                        tincidunt tortor aliquam nulla facilisi. Consequat mauris nunc congue nisi vitae 
                        suscipit tellus. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.
                    </p>
                    <br />
                    <p>
                        Varius sit amet mattis vulputate enim nulla. Diam phasellus vestibulum lorem sed risus 
                        ultricies tristique nulla. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl 
                        vel. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Ac turpis 
                        egestas sed tempus urna et. Sit amet consectetur adipiscing elit. Elementum integer 
                        enim neque volutpat. Mauris vitae ultricies leo integer malesuada nunc vel risus. 
                        Faucibus ornare suspendisse sed nisi. At ultrices mi tempus imperdiet nulla malesuada 
                        pellentesque. Amet mattis vulputate enim nulla aliquet porttitor. Id volutpat lacus 
                        laoreet non. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis.
                    </p>
                    <br />
                    <p>
                        Facilisi morbi tempus iaculis urna id volutpat. Condimentum mattis pellentesque id nibh 
                        tortor. Sagittis eu volutpat odio facilisis mauris sit. Eu lobortis elementum nibh tellus 
                        molestie. Egestas maecenas pharetra convallis posuere morbi. Tellus molestie nunc non blandit 
                        massa enim. Faucibus ornare suspendisse sed nisi lacus sed viverra. Sapien nec sagittis 
                        aliquam malesuada bibendum arcu. Venenatis tellus in metus vulputate. Pharetra diam sit 
                        amet nisl suscipit. Eros in cursus turpis massa tincidunt dui ut. Sed tempus urna et 
                        pharetra pharetra massa massa ultricies. Volutpat lacus laoreet non curabitur gravida. 
                        Potenti nullam ac tortor vitae. Et malesuada fames ac turpis egestas maecenas pharetra.
                    </p>

                    </NormalText>
                </AboutNormalTextDiv>
            </AboutTextDiv>
        </PageDiv>
    );
};

export default About;
