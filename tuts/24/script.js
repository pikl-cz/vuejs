new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  },

  //!!! Use just in case I don´t want to CACHE data --> instead of use "computed"
  methods: {
    result: function() {
      console.log('Method');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    }
  }
});
