const stores = {
  state: {
    user: "",
    projects: [],
    blogs: [],
    introduce: {
      skills: [],
      experiences: []
    }
  },
  mutations: {
    setUser (state, user) {
      this._vm.$set(state, "user", user);
    },
    initData (state, data) {
      state.introduce.skills.push(...data.skills);
      state.introduce.experiences.push(...data.experiences);
      state.projects.push(...data.projects);
      state.blogs.push(...data.blogs);
    }
  },
  actions: {
    setUser () {
      // TODO 增加用户登录
    },
    initData ({ commit }) {
      this._vm.axios.get("/data/index").then(resp => {
          const data = resp.data.data.introduce;
          commit("initData", {
              skills: data.skills,
              experiences: data.experiences,
              projects: data.projects,
              blogs: resp.data.data.blogs
          });
      });
    }
  }
};

export {
  stores
};