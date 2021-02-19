const Card = {
  template: `
    <div class="card">
      <div class="img-container" :class="isItem ? 'thumbnail' : null">
        <div v-if="isItem" class="like"></div>
        <img :src="imgUrl" alt=""/>
      </div>
      <span v-if="isItem" class="price">\${{price}}/night</span>
      <h4 class="title">
        {{title}}
      </h4>
      <p class="description">
        {{description}}
      </p>
      <a v-if="isItem" href="javascript:void(0)" class="btn fill">Read More</a>
    </div>
  `,
  props: {
    imgUrl: String,
    title: String,
    description: String,
    price: Number,
    like: Boolean,
    isItem: {
      type: Boolean,
      default: false
    },
  }
}

const app = new Vue({
  el: '#app',
  components: {
    'card' : Card,
  },
  data: {
    services: [
      {
        imgUrl: './assets/fire.svg',
        title: 'Camping & Day Use', 
        description: 'Return to your favorite spot or discover a new one that’s right for you.'
      },
      {
        imgUrl: './assets/fire.svg',
        title: 'Camping & Day Use', 
        description: 'Return to your favorite spot or discover a new one that’s right for you.'
      },
      {
        imgUrl: './assets/fire.svg',
        title: 'Camping & Day Use', 
        description: 'Return to your favorite spot or discover a new one that’s right for you.'
      },
      {
        imgUrl: './assets/fire.svg',
        title: 'Camping & Day Use', 
        description: 'Return to your favorite spot or discover a new one that’s right for you.'
      },
    ],
    destinations: [
      {
        imgUrl: './assets/image4.jpg',
        title: 'Luxury Tiny Beach Cabin', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
    ]
  }
})
