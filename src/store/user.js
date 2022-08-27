export default {
    state: {
        isLogin:false,
    },
    mutations: {
        loginAction(state) {
            state.isLogin = true;
        },
        logoutAction(state) {
            state.isLogin = false;
        }
    }
}