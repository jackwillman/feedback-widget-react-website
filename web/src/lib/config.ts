const config = {
    user : {
        id : {
            cookieName : 'user-id',
            responseName : 'userId'
        },
        email : 'email',
        username : 'username'
    },
    sessionToken : {
        duration : 3 * 60 * 60 * 1000, // 3 hours
        headerName : 'x-access-token',
        cookieName : 'auth-token'
    },
    path : {
        main : '/',
        sessions : '/sessions',
        user : '/users/auth'
    }
};

export default config;