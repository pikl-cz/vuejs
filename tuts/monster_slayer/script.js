new Vue({
  el: '#app',
  data: {
    game: false,
    players: [
      { name: 'one', health: 0 },
      { name: 'two', health: 0 }
    ],
    log: []
  },
  computed: {
    getHealth: function() {
      return {
        backgroundColor: 'green',
        color: 'white',
        float: 'left'
      };
    }
  },
  watch: {},
  computed: {
    reversedLog() {
      return this.log.slice().reverse();
    }
  },
  methods: {
    attack: function(damage) {
      if (this.players[0].health > 0) {
        this.players[1].health -= damage;
        let attackLabel = damage > 5 ? 'special' : '';
        this.log.push(
          'Player attacked monster ' +
            damage +
            ' points ' +
            attackLabel +
            ' damage!'
        );
        if (this.players[1].health <= 0) {
          this.players[1].health = 0;
          this.log.push('Player won and monster lost!');
        }
        this.monster();
      }
    },
    heal: function() {
      if (this.players[0].health > 0) {
        this.players[0].health += 5;
        this.log.push('Player is healing!');
        this.monster();
      }
    },
    monster: function() {
      let damage = Math.floor(Math.random() * 10);
      this.players[0].health -= damage;
      let attackLabel = damage > 5 ? 'special' : '';
      this.log.push(
        'Monster attacked player ' +
          damage +
          ' points ' +
          attackLabel +
          ' damage!'
      );
      if (damage < 3) {
        this.players[1].health += 10;
        this.log.push('Monster is healing!');
      }

      if (this.players[0].health <= 0) {
        this.players[1].health = 0;
        this.log.push('Monster won and player lost!');
      }
    },
    startgame: function() {
      this.game = true;
      this.players[0].health = 100;
      this.players[1].health = 100;
    },
    endgame: function() {
      this.game = false;
      this.log = [];
    },
    colorBar: function(who) {
      let status = this.players[who].health;
      let color;
      if (status > 75) {
        color = 'green';
      } else if (status > 35) {
        color = 'orange';
      } else {
        color = 'red';
      }
      return color;
    }
  }
});
