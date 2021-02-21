const Card = {
  template: `
    <div class="card">
      <div class="img-container" :class="isItem ? 'thumbnail' : null">
        <div v-if="isItem" class="like flex-center">
          <img :src="likeIcon()" alt="" @click="toggleLike()"/>
        </div>
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
  },
  methods: {
    likeIcon () {
      return `./assets/icons/heart-${this.like ? 'filled' : 'outline'}.svg`
    },
    toggleLike () {
      this.like = !this.like
    }
  }
}

const FooterMenuItem = {
  template: `
    <div>
      <h4>{{title}}</h4>
      <li v-for="item in items">
        <a href="javascript:void(0)">
          {{item}}
        </a>
      </li>
    </div>
  `,
  props: {
    title: String,
    items: Array
  }
}

new Vue({
  el: '#app',
  components: {
    'card' : Card,
    'footer-menu-item': FooterMenuItem 
  },
  data: {
    screenWidth: window.innerWidth,
    services: [
      {
        imgUrl: './assets/fire.svg',
        title: 'Camping & Day Use',
        description: 'Return to your favorite spot or discover a new one that’s right for you.'
      },
      {
        imgUrl: './assets/ticket.svg',
        title: 'Tours & Tickets',
        description: 'Reserve tours and tickets to participate in events.'
      },
      {
        imgUrl: './assets/license.svg',
        title: 'Permits',
        description: 'Obtain permits for access to high-demand locations.'
      },
      {
        imgUrl: './assets/fishing.svg',
        title: 'Recreation Activities',
        description: 'Find the best spots for hunting, fishing & recreational shooting.'
      },
    ],
    destinations: [
      {
        imgUrl: './assets/uploaded/zach-betten-k-0.jpg',
        title: 'Trickle Creek Ranch', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-1.jpg',
        title: 'Dragonfly Tiny Cabin', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-2.jpg',
        title: 'Tiny Cabin in the mountains', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-3.jpg',
        title: 'The Stuga', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-4.jpg',
        title: 'Luxury Tiny Beach Cabin', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-5.jpg',
        title: 'The Summit Cabin', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-6.jpg',
        title: 'Kindred Spirits Cabin', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-7.jpg',
        title: 'The Hermitage Cabin', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-8.jpg',
        title: 'Red Lifeguard Stand', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-9.jpg',
        title: 'The Tree House', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-10.jpg',
        title: 'Barrier island elevated tent', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
      {
        imgUrl: './assets/uploaded/zach-betten-k-11.jpg',
        title: 'Ninovan on the Shore', 
        description: 'Book unique camping experiences on over 300,000 campsites.',
        price: 36,
        like: false
      },
    ],
    footerMenuItems: [
      {
        title: 'Get to Know Us',
        items: [
          'About Us',
          'Rules & Reservation',
          'Policies',
          'Accessibility',
          'Media Center'
        ]
      },
      {
        title: 'Plan with Us',
        items: [
          'Find Trip Inspiration',
          'Build a Trip',
          'Buy a Pass',
          'Enter a Lottery'
        ]
      },
      {
        title: 'Let Us Help You',
        items: [
          'Your Account',
          'Your Reservations',
          'Contact Us',
          'Help Center',
          'Submit Feedback'
        ]
      },
    ],
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    })
  },
  methods: {
    viewPointWidth (min, max) {
      return min <= this.screenWidth && this.screenWidth <= max
    },
  },
  computed: {
    renderDestinations () {
      if (this.viewPointWidth(0, 600)) {
        return this.destinations.slice(0, 4)
      } else if (this.viewPointWidth(600, 1024)) {
        return this.destinations.slice(0, 8)
      }
      return this.destinations
    }
  }
})
