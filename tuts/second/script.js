new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increase: function(event) {
      this.counter++;
    }
  }
});
