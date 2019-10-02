new Vue({
  el: '#app',
  data: {
    attachRed: false,
    property: 'green'
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
});
