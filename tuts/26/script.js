new Vue({
  el: '#app',
  data: {
    link: 'http://google.com'
  },
  methods: {
    changeLink: function() {
      this.link = 'http://seznam.cz';
    }
  }
});
