/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

export const state = () => ({
  error: null,
});

export const mutations = {
  setError(state, data) {
    state.error = data;
  },
};

export const actions = {
  async getResource({ commit }, params) {
    try {
      const { route = '' } = params;
      const { data, status } = await this.$axios.get(`${route}`, {
        // headers: {
        //   Authorization: `Bearer ${getsession('token')}`,
        // },
      });
      if (status === 200) {
        return data;
      }
    } catch (error) {
      const { response: { data } } = error;
      const { message, status } = data;
      if (status === 401) {
        window.location.reload(true);
      }
      commit('setError', message);
    }
  },

  async createResource({ commit }, params) {
    try {
      const { route = '', body = {} } = params;
      const { data, status } = await this.$axios.post(`${route}`, body, {
        // headers: {
        //   Authorization: `Bearer ${getsession('token')}`,
        // },
      });
      if (status === 200) {
        if (data.data) {
          return data.data;
        }
        return 1;
      }
    } catch (error) {
      const { response: { data } } = error;
      const { message, status } = data;
      if (status === 401) {
        commit('removeAuth');
        window.location.reload(true);
      }
      commit('setError', message);
    }
  },

  async deleteResource({ commit }, params) {
    try {
      const { route = '' } = params;
      const { status } = await this.$axios.delete(`${route}`, {
        // headers: {
        //   Authorization: `Bearer ${getsession('token')}`,
        // },
      });
      if (status === 200) {
        return 1;
      }
      return 0;
    } catch (error) {
      const { response: { data } } = error;
      const { message, status } = data;
      if (status === 401) {
        commit('removeAuth');
        window.location.reload(true);
      }
      commit('setError', message);
    }
  },

  async editResource({ commit }, params) {
    try {
      const {
        route = '', body = {},
      } = params;
      const { data, status } = await this.$axios.put(`${route}`, body, {
        // headers: {
        //   Authorization: `Bearer ${getsession('token')}`,
        // },
      });
      if (status === 200) {
        if (data.data) {
          return data.data;
        }
        return 1;
      }
    } catch (error) {
      const { response: { data } } = error;
      const { message, status } = data;
      if (status === 401) {
        commit('removeAuth');
        window.location.reload(true);
      }
      commit('setError', message);
    }
  },
};
