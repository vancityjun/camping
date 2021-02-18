const Card = {
  template: `<div>this is a Card</div>`,
  props: {
    imgUrl: String,
    title: String,
    description: String,
    isItem: Boolean,
  }
}

const app = new Vue({
  el: '#app',
  components: {
    'card' : Card,
  }
})
