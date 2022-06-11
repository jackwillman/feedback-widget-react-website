import { CircleNotch } from "phosphor-react";

const Loading = function LoadingComponent() {
    return (
        <div className="loading">
            <CircleNotch weight="bold" className="loading-icon"/>
        </div>
    );
};

export default Loading;