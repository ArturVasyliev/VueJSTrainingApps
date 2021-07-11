<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      >
        <!-- To pass something that is not string 
          we need to bind the value to the attribute  -->
      </friend-contact>
    </ul>
    <!-- Prop and Event Fallthrough allows to pass events and props 
      to the components that don't define these props or events.
      In this case, 'type' and 'click' values are passed to <button> inside BaseButton component. You can get access to these 
      fallthrough props on a built-in $attrs property (e.g. this.$attrs ).
      This can be handy to build pure presentational components where 
      you don't want to define all props and events individually -->
    <base-button type="submit" @click="baseButtonClick"> Click me </base-button>
    <!-- It's possible to pass props one by one -->
    <user-data :firstname="person.firstname" :lastname="person.lastname">
    </user-data>
    <!-- Or use 'Binding all Props' to allow Vue to automatically
      map properties of an object to Props by name  -->
    <user-data v-bind="person"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "ironman",
          name: "Tony Stark",
          phone: "012345 6789",
          email: "ironman@superhero.com",
          isFavorite: true
        },
        {
          id: "spiderman",
          name: "Peter Parker",
          phone: "9745452 6789",
          email: "spiderman@superhero.com",
          isFavorite: false
        }
      ],
      person: { firstname: "Artur", lastname: "Vasyliev" }
    };
  },
  methods: {
    // Here we handle our custom event that we created in
    // FriendContact component with 'id' parameter
    toggleFavoriteStatus(friendId) {
      const friend = this.friends.find(friend => friend.id === friendId);
      friend.isFavorite = !friend.isFavorite;
    },
    baseButtonClick() {
      alert("Base button click");
    },
    addContact(name, phone, email){
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId){
      this.friends = this.friends.filter(
        friend => friend.id !== friendId);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>