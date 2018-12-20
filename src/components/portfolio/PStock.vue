<template>
  <div class="col-md-4">
    <div class="panel-group">
      <div class="panel panel-info">
        <div class="panel-heading">
          <div class="panel-title">
            <b>{{stock.name}}</b>
            <small>(price: {{stock.price | money}} | quantity: {{stock.quantity}} )</small>
          </div>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input type="number" class="form-control" v-model="quantity" placeholder="Quantity">
          </div>
          <div class="pull-right">
            <button
              class="btn btn-success"
              @click="SellStock"
              :disabled="invalidQty || quantity<=0"
            >{{ invalidQty ? 'Invalid Qty' : 'Sell'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["sellStock"]),
    SellStock: function() {
      const order = {
        id: this.stock.id,
        quantity: this.quantity,
        stockPrice: this.stock.price
      };
      console.log("selling this item");
      console.log(order);
      this.sellStock(order);
      this.quantity = 0;
    }
  },
  computed: {
    invalidQty: function() {
      return this.quantity > this.stock.quantity;
    }
  }
};
</script>
