const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "ironman",
          name: "Tony Stark",
          phone: "012345 6789",
          email: "ironman@superhero.com",
        },
        {
          id: "spiderman",
          name: "Peter Parker",
          phone: "9745452 6789",
          email: "spiderman@superhero.com",
        },
      ],
    };
  },
});

// Use multiword id for component to not clash with HTML keywords.
// Conceptually, component is an app which is connected to another app.
app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }} </li>
      <li><strong>Email:</strong> {{ friend.email }} </li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "spiderman",
        name: "Peter Parker",
        phone: "9745452 6789",
        email: "spiderman@superhero.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
