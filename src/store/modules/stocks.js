import stockData from '../../data/stocks';

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach((element) => {
      element.price = Math.round(element.price * (1 + Math.random() - 0.5));
    });
  },
  ADD_STOCK: function(state, stock) {}
};

const actions = {
  setStocks: ({ commit }) => {
    commit('SET_STOCKS', stockData);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  getLog: function(state) {
    return 0;
  },
  getStocks: function(state, getters) {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
