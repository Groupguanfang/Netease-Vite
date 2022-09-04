const play = {
    state: {
        isOpen: false,
        current: {
            picUrl: "./pic.png",
        }
    },
    mutations: {
        openDrawer(state) {
            state.isOpen = true
        },
        closeDrawer(state) {
            state.isOpen = false
        }
    }
}
export default play