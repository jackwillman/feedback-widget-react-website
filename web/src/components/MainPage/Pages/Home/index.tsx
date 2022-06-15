import { PageProps } from '../..';

import { PageDiv } from '../styled';
import {
    TextDiv,
    HomeImageDiv,
    BiggerHomeText,
    BigHomeText,
    NormalHomeText,
    NormalTextDiv
} from './styled';

import heroUrl from '../../../../images/hero.svg';

const Home = function HomePageComponent({ setCurrentPage } : PageProps) {
    return (
        <PageDiv>
            <TextDiv>
                <BiggerHomeText>
                    Let's <a className='text-brand-500'>change</a> the world together.
                </BiggerHomeText>

                <BigHomeText>
                    Everybody deserves <a className='text-brand-500'>better...</a>
                </BigHomeText>
                
                <NormalTextDiv>
                    <NormalHomeText> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </NormalHomeText>
                </NormalTextDiv>
            </TextDiv>
            <HomeImageDiv>
                <img src={ heroUrl } alt='Image of a long haired person holding flower petals.' />
            </HomeImageDiv>
        </PageDiv>
    );
};

export default Home;
