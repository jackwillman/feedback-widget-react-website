import { 
    PageDiv,
    BiggerText,
    BigText,
    NormalText 
} from '../styled';
import { 
    HomePageDiv,
    HomeImageDiv,
    HomeTextDiv,
    HomeNormalTextDiv,
} from './styled';

import heroUrl from '../../../../images/hero.svg';

const Home = function HomePageComponent() {
    return ( 
        <HomePageDiv>
            <HomeTextDiv>
                <BiggerText>
                    Let's <a className='text-brand-500'>work</a> together.
                </BiggerText>

                <BigText>
                    Everybody deserves <a className='text-brand-500'>better...</a>
                </BigText>
                
                <HomeNormalTextDiv>
                    <NormalText> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </NormalText>
                </HomeNormalTextDiv>
            </HomeTextDiv>
            <HomeImageDiv>
                <img src={ heroUrl } alt='Image of a long haired person holding flower petals.' width={800}/>
            </HomeImageDiv>
        </HomePageDiv> 
    );
};

export default Home;
