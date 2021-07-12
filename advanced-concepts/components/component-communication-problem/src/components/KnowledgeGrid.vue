<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // Injecting the data we provided from App.vue component.
  // It's only possible to inject data that was provided
  // by parent components (not sibling or child)
  inject: ['topics'],
};
</script>