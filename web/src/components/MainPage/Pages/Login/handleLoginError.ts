interface HandleLoginErrorRequest {
    error : any;
    setErrorState : (errorState : string) => void;
};

export const handleLoginError = function (
    {
        error,
        setErrorState
    } : HandleLoginErrorRequest
) {
    if (error.response) {
        console.log(error.response.data);
        setErrorState(error.response.data.error);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error: ', error.message);
    }
};