const state = {
  fund: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    state.fundJustAdded = true;
    const record = state.stocks.find((x) => x.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.fund -= quantity * stockPrice;
    //state.fundJustAdded = false;
  },

  SELL_STOCK(state, { id, quantity, stockPrice }) {
    const record = state.stocks.find((x) => x.id == id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      quantity = record.quantity;
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.fund += quantity * stockPrice;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  },
  buyStock({ commit }, order) {
    commit('BUY_STOCK', order);
  }
};

const getters = {
  getPortfolio(state, getters) {
    var ret = state.stocks.map((s) => {
      var record = getters.getStocks.find((e) => e.id == s.id);

      return {
        id: s.id,
        quantity: s.quantity,
        name: record.name,
        price: record.price
      };
    });

    return ret;
  },
  fund(state) {
    return state.fund;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
