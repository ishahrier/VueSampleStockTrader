<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition name="fadeDown" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  components: {
    appHeader: Header
  },
  created: function() {
    this.$store.dispatch("setStocks");
  }
};
</script>

<style>
body {
  padding: 30px;
}
</style>
