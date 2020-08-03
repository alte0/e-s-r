const reducerLogin = (state = "", action ) => {
    switch (action.type) {
        case 'GET_LOGIN':
            return action.payload;
        default:
            return state;
    }
}

export default reducerLogin;
