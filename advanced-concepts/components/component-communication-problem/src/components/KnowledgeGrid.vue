<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // Injecting the data we provided from App.vue component.
  // It's only possible to inject data that was provided
  // by parent components (not sibling or child)
  inject: ['topics'],
  emits: ['select-topic']
};
</script>