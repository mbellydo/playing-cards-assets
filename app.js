const numbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
const aces = ['C', 'D', 'S', 'H']
const acesNames = ['clubs', 'diamonds', 'spades', 'hearts']

const app = Vue.createApp({
  data() {
    return {
      cards: []
    }
  },
  created() {

    for (number in numbers) {
      for (ace in aces) {
        this.cards.push({
          value: numbers[number] + aces[ace],
          image: `/png/${numbers[number]}_of_${acesNames[ace]}.png`
        })
      }
    }
  }
})

app.component('poker-card', {
  props: ['image', 'value'],
  data() {
    return {
      isFlipped: true,
    }
  },
  methods: {
    flipCard() {
        this.isFlipped = !this.isFlipped
        console.log("Card value: ", this.value)
    }
  },

  template: `
    <span>
        <transition name="card-fade" mode="out-in">
            <img @click="flipCard" v-if="!isFlipped" width="157" :src="image">
            <img @click="flipCard" v-else src="/png/back.png">
        </transition>
    </span>
  `
})

app.mount('#app')