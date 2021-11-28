export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
      console.log("this is cliked");
    },
  },
  getters: {
    authModalShow: (state) => state.authModalShow,
  },
});
