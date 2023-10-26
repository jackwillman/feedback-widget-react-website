import {
    LoadingClass,
    LoadingIcon
} from './styled';

const Loading = function LoadingComponent() {
    return ( 
        <LoadingClass>
            <LoadingIcon weight="bold" />
        </LoadingClass> 
    );
};

export default Loading;