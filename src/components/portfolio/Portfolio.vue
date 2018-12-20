<template>
  <div v-if="stocks.length>0">
    <port-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></port-stock>
  </div>
  <div v-else>
    <div class="alert alert-warning">You do not have any stocks yet! Please buy some stocs!</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PStock from "./PStock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "getPortfolio"
    })
  },
  components: {
    portStock: PStock
  }
};
</script>
