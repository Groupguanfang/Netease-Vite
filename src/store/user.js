const user = {
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
export default user