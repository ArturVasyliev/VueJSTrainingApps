<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">
      {{ friendIsFavorite === "1" ? "Remove from" : "Set as" }} Favorite
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props become available as data properties using this.
  // so there shouldn't be dashes in props names
  props: [
    "name",
    "phoneNumber", // translated to 'phone-number' HTML attribute
    "emailAddress",
    "isFavorite"
  ],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com"
      },
      // We can copy the value from Prop and change the copy
      // But this will affect only the current component
      // We still won't be able to mutate the value above (in App comp.)
      friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // THIS function causes 'Unexpected mutation' error
    // because we can't change properties that we get from Props
    // (from App component) - this is 'Unidirectional data flow':
    // toggleFavorite() {
    //   if(this.isFavorite === '1'){
    //     this.isFavorite = '0';
    //   }
    //   else{
    //     this.isFavorite = '1';
    //   }
    // }

    toggleFavorite() {
      if (this.friendIsFavorite === "1") {
        this.friendIsFavorite = "0";
      } else {
        this.friendIsFavorite = "1";
      }
    }
  }
};
</script>