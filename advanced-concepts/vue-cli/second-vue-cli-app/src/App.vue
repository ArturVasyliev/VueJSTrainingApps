<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
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
};
</script>