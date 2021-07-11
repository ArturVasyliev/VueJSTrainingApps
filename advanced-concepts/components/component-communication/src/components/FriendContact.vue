<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">
      {{ isFavorite ? "Remove from" : "Set as" }} Favorite
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
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props become available as data properties using this.
  // so there shouldn't be dashes in props names
  // props may contain an array of props names or an object:
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      // required determines if we need to pass the value from above
      required: true
    },
    phoneNumber: {
      // possible prop types: String, Number, Boolean, Array, Object
      // Date, Function, Symbol, Date etc.
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // default value when property is not required
      // default can also be a function that returns value
      default: false
      // we can validate the property value
      // validator: function(value){
      //   return value === '0' || value === '1';
      // }
    }
  },
  // Basic definition of emits:
  emits: ["toggle-favorite", "delete"],
  // Advanced definition of emits:
  // emits: {
  //   "toggle-favorite": function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing");
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false
      // We can copy the value from Prop and change the copy
      // But this will affect only the current component
      // We still won't be able to mutate the value above (in App comp.)
      // friendIsFavorite: this.isFavorite
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
      // Instead of using local property of this component
      //this.friendIsFavorite = !this.friendIsFavorite;

      // You can emit an event that parent component can listen to
      // and change original isFavorite property. You can pass any number
      // of parameters after the name of the event
      this.$emit("toggle-favorite", this.id);
    }
  }
};
</script>