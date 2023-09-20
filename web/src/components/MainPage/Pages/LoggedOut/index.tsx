import { 
    PageDiv,
    BigText, 
    TextDiv
} from '../styled';

const LoggedOut = function LoggedOutPageComponent() {
    return (
        <PageDiv>
            <TextDiv>
                <BigText>
                    Logged out.
                </BigText>
            </TextDiv>
        </PageDiv>
    );
};

export default LoggedOut;
