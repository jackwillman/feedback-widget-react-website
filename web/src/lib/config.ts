const config = {
    sessionToken : {
        duration : 3 * 60 * 60 * 1000, // 3 hours
        headerName : 'x-access-token',
        cookieName : 'auth-token'
    },
    path : {
        main : '/',
        sessions : '/sessions'
    }
};

export default config;