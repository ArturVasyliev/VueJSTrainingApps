const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "ironman",
          name: "Tony Stark",
          phone: "012345 6789",
          email: "ironman@superhero.com"
        },
        {
          id: "spiderman",
          name: "Peter Parker",
          phone: "9745452 6789",
          email: "spiderman@superhero.com"
        },
      ],
    };
  },
});

app.mount("#app");
