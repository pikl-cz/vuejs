new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    content: 'This is my funky content.',
    description: 'Tohle je popis.',
    link: 'https://pikl.cz',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    changeDesc: function(event) {
      this.description = event.target.value;
    },
    printContent: function() {
      return this.content;
    },
    printNewTitle: function() {
      this.title = 'H-e-l-l-o-!';
      return this.title;
    }
  }
});
