const config = {
    user : {
        id : {
            cookieName : 'user-id',
            responseName : 'userId'
        },
        email : 'email',
        username : 'username',
        password : 'password'
    },
    sessionToken : {
        duration : 3 * 60 * 60 * 1000, // 3 hours
        headerName : 'x-access-token',
        cookieName : 'auth-token'
    },
    path : {
        baseUrl : import.meta.env.VITE_API_URL,
        main : '/',
        sessions : '/sessions',
        users : 'users',
        user : '/users/auth',
        feedbacks: '/feedbacks/auth'
    }
};

export default config;