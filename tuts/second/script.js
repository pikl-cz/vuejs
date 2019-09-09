new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(event) {
      this.counter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});
