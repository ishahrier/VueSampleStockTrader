<template>
  <div class="col-md-4">
    <div class="panel-group">
      <div class="panel panel-success">
        <div class="panel-heading">
          <div class="panel-title">
            <b>{{stock.name}}</b>
            <small>(price : {{stock.price | money}})</small>
          </div>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input type="number" class="form-control" v-model="quantity" placeholder="Quantity">
          </div>
          <div class="pull-right">
            <button
              class="btn btn-success"
              @click="BuyStock"
              :disabled="!(hasFund && quantity>0)"
            >{{hasFund ? 'Place Order': 'Fund Needed'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    BuyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.$store.dispatch("buyStock", order);
    }
  },
  computed: {
    hasFund: function() {
      return this.$store.getters.fund >= this.quantity * this.stock.price;
    }
  }
};
</script>
